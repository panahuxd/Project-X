# account-menu

> Layer: Commerce · Status: draft · Figma: [DKB Commerce › account-menu](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=7-260) · Code: account side menu (built from `avatar`, `separator`, `sidebar-menu-button`)

## Purpose
The side menu of the account shell (`/profile/*`): who is signed in and the account sections. Same on every platform; only the items differ.

## Anatomy
Card (310 = 3 columns): `account` row (`avatar`, `name`, `detail`) · separator · `menu` of `sidebar-menu-button` items `item-1…7`.
Default items: خلاصهٔ حساب · سفارش‌ها · اعتبار و پرداخت · آدرس‌ها · اطلاعات حساب · تنظیمات · خروج.

## Properties
| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `default` | | |
| `name` | text | | «فروشگاه آفتاب» | Store, company or person |
| `detail` | text | | «۰۹۱۲ ••• ۴۵۶۷» | Masked phone, company role or tier |
| exposed | instances | `avatar`, `item-1…7` | | Relabel, re-icon, hide, set `state=active` on the current section |

Platform items: B2E adds «درخواست‌ها و تأییدها» and company sections; B2R adds the customer club; Portals hide what the tenant doesn't offer. Use the exposed items; don't detach.

## Tokens
| Part | Property | Token |
|---|---|---|
| card | fill / border / radius / padding / gap | `bg.surface` / `border.default` / `radius.card` / `space.16` / `space.12` |
| account | gap | `space.12`; name `label`, detail `body-sm` `text.muted` |
| menu | gap | `space.2` |

## Behaviour and RTL
Desktop: sticky in the 3-column aside (offset = header height + `space.16`). Mobile: the profile home shows it full width; sub-pages use `mobile-header` with back. «خروج» stays last.

## Accessibility
`nav` labelled «حساب کاربری»; active item `aria-current="page"`.

## Changelog
- 0.10.0 — created.
