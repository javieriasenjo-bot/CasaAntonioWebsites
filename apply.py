import json,os
R=r"C:\dev\CasaAntonioWebsites"
ts=json.load(open("ts_a.json",encoding="utf-8")); man=open("man_a.txt",encoding="utf-8").read()
mp=os.path.join(R,"src","lib","photo-manifest.ts"); m=open(mp,encoding="utf-8",newline="").read()
nl="\r\n" if "\r\n" in m else "\n"
k='  "b-living": {'
if '"a-exterior"' not in m:
    assert k in m
    m=m.replace(k,man.replace("\n",nl)+nl+k,1); open(mp,"w",encoding="utf-8",newline="").write(m)
fp=os.path.join(R,"src","data","facts.ts"); f=open(fp,encoding="utf-8",newline="").read()
if "a-exterior.jpg" not in f:
    def line(t):
        s,en,ja,zh,ko=t; q=lambda x:json.dumps(x,ensure_ascii=False)
        return f'  p("/photos/{s}.jpg", {q(en)}, {q(ja)}, {q(zh)}, {q(ko)}),'
    d={t[0]:t for t in ts}
    a=f.index("export const apartmentAPhotos"); e=f.index("...housePhotos,",a)
    old=[l.rstrip("\r") for l in f[a:e].splitlines() if l.strip().startswith('p("')]
    fn=["a-bedroom-one","a-bedroom-two","a-bath","a-washroom","a-exterior","a-entrances"]
    on=lambda n:[l for l in old if f'/photos/{n}.jpg' in l][0]
    o=[on(x) for x in ["living","kitchen-living","dining","dining-2","kitchen"]]+[line(d[x]) for x in fn]
    o+=[l for l in old if l not in o]+[line(t) for t in ts if t[0] not in fn]
    f=f[:a]+("export const apartmentAPhotos: Photo[] = ["+nl+nl.join(o)+nl+"  ")+f[e:]
    open(fp,"w",encoding="utf-8",newline="").write(f)
print("ok")
