import type { copy as EnCopy } from "./packs/en";
import type { guides as EnGuides } from "./packs/en";
import { copy as ja } from "./packs/ja";
import { copy as zh } from "./packs/zh";
import { copy as ko } from "./packs/ko";
import { guides as jaG } from "./packs/ja";
import { guides as zhG } from "./packs/zh";
import { guides as koG } from "./packs/ko";

type Loose<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Loose<U>[]
    : T extends object
      ? { [K in keyof T]: Loose<T[K]> }
      : T;

const _ja: Loose<typeof EnCopy> = ja;
const _zh: Loose<typeof EnCopy> = zh;
const _ko: Loose<typeof EnCopy> = ko;
const _jaG: Loose<typeof EnGuides> = jaG;
const _zhG: Loose<typeof EnGuides> = zhG;
const _koG: Loose<typeof EnGuides> = koG;
void _ja; void _zh; void _ko; void _jaG; void _zhG; void _koG;
