# sidebar

> Layer: Core · Status: draft · Figma: [DKB Components › sidebar](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=72-2291) · Code: `SidebarProvider`, `Sidebar`, `SidebarHeader`, `SidebarContent`, `SidebarGroup`, `SidebarGroupLabel`, `SidebarMenu`, `SidebarMenuButton`, `SidebarFooter`, `SidebarTrigger` (shadcn `sidebar`)

## Purpose
App navigation for account panels, the B2E company workspace and portals: groups of sections with a company switcher on top and the user at the bottom.

## Anatomy
On the right edge (RTL), border on its left. `header` (company switcher: brand tile, name, role, chevrons-up-down) · `content` (groups: label + `sidebar-menu-button`s) · `footer` (user: avatar, name, email). `collapsed` keeps icons only.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `state` | variant | `expanded`, `collapsed` | `expanded` | |
| menu button: `state` | variant | `default`, `hover`, `active`, `disabled` | | One active |
| menu button: `collapsed` | variant | `false`, `true` | | |
| menu button: `label`, `icon`, `showBadge`, `badge` | text / swap / boolean / text | | | Badge = count on the left |

## Tokens
| Part | Property | Token |
|---|---|---|
| sidebar | width | `size.256`; collapsed `size.48` |
| sidebar | fill / border | `bg.subtle` / `border.default` on the inner (left) edge |
| header, footer | padding / gap | `space.8` |
| content | padding / group gap | `space.8` / `space.16`; items gap `space.2` |
| group label | style | `label-sm` `text.muted`, padding `space.8` × `space.4` |
| menu button | height / padding / gap / radius | `size.32` / `space.8` / `space.8` / `radius.md` |
| menu button | text | `body` (active `label`), icon `icon.size.sm` |
| states | fill | hover `bg.hover`, active `bg.muted`; disabled `opacity.disabled` |
| brand tile | | `size.32`, `bg.primary`, icon `text.on-primary`, `radius.md` |

## Behaviour and RTL
Toggle with a trigger in the page header (or Ctrl+B); remember the state. Collapsed items show a `tooltip` with the label on the left. Below 1024px the sidebar opens as a `sheet` from the right. Never show a bottom nav and a sidebar together (B2E gap #11).

## Accessibility
`nav` with `aria-label`; active item `aria-current="page"`; collapsed buttons keep their accessible name.

## Changelog
- 0.7.0 — created (menu button 8 variants, sidebar 2).
