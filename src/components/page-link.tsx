import type { ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import { pagePath, type PageId } from "@/lib/paths";

export function PageLink({
  page,
  hash,
  className,
  children,
  ...rest
}: {
  page: PageId;
  hash?: string;
  className?: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { lang } = useLang();
  const href = `${pagePath(page, lang)}${hash ? `#${hash}` : ""}`;
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}
