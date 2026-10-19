# Sources registry (Phase 1, started 2026-10-19)
- DS: Figma ykBaZL3k6ieWYjbWYx9TlM "DS - Shadcn" (library). Pages: Documentation, Icons, Assets, Typography, Blocks (Official), Pro Blocks (Application/Landing), ~50 component pages (shadcn set), Utility Components, Draft.
  - Variable collections: 1.TailwindCSS (462, Default) | 2.Theme (262; modes CE, Gold, B2E) | 3.Mode (76; Light, Dark) | 4.Custom (26; Desktop, Mobile). 309 text styles, 1 paint style, 34 effect styles.
- B2E Figma: XWgwct0LovI8Nu48ALSJp2 "B2E Platform - Phase 2". Pages: Cover, Benchmarks, Components, Exploration, Handoff(empty), Design Check(empty), Presentation(main screens), Archive.
  - Libraries used: DS - Components, DS - Shadcn, VA - DKB Logos, VA - Banners, VA - File Covers.
- B2E live: https://b2e.digikalabusiness.com/
- Git: https://git.digikala.com/b2b (READ ONLY - never write). Not reachable from cloud; must use user's browser.
- Docs: https://docs.digikala.com/x/jLt7Cg (Confluence). Not reachable from cloud.
# DS - Shadcn tokens (source: Figma ykBaZL3k6ieWYjbWYx9TlM variables, read 2026-10-19)
## Architecture
Primitive (1.TailwindCSS) -> Theme/brand (2.Theme: CE | Gold | B2E) -> Mode (3.Mode: Light|Dark, semantic base/*) -> Custom responsive (4.Custom: Desktop|Mobile)
## Brand-varying tokens (CE | Gold | B2E), everything else identical across brands
primary-light: navyBlue/500 #093672 | gold/500 #dbb976 | violet/800
primary-border-light: navyBlue/500 | gold/600 | violet/800
primary-foreground-light: neutral/50 | gold/700 #3f2d08 | violet/50
ring-light: navyBlue/300 | gold/300 | violet/300
secondary-light: neutral/100 | gold/300 | white
secondary-border-light: neutral/100 | gold/400 | violet/800
secondary-foreground-light: neutral/900 | gold/700 | violet/800
accent-light: neutral/100 | navyBlue/500 (!) | neutral/100
accent-dark: neutral/700 | navyBlue/50 | neutral/700
accent-foreground-light: neutral/900 | navyBlue/50 | neutral/900
accent-foreground-dark: neutral/50 | navyBlue/600 | neutral/50
info-light: blue/700 | sky/700 | blue/700 ; info-background-light blue/50 | sky/50 | blue/50
primary-dark: neutral/200 (all brands) -> dark mode primary is not brand-colored
## Custom palettes
navyBlue 50 #f4f7fb 100 #e6edf5 200 #c2d3e8 300 #9cb8da 400 #608fc2 500 #093672 600 #072d61 700 #062451 800 #041b40 900 #031231 950 #010918
gold 300 #fdfaf1 400 #f7e4cb 500 #dbb976 600 #c2a468 700 #3f2d08 800 #261401 900 #0d0700 950 #030100 (no 50-200)
## Semantic (shadcn-standard + extras): background, foreground, card, popover, muted, accent, border, input, ring, ring-offset, primary(+border), secondary(+border), destructive/success/warning/info each with -foreground and -background, chart-1..5, sidebar-*, alpha/5..90 (white-based in light), alpha black/5..90, custom/outline #749dca80 (light)
Note: in light mode destructive-foreground=red/50 and success-foreground=green/50 (text on solid) BUT warning-foreground=yellow/700 & info-foreground=blue/700 -> inconsistent foreground semantics.
## Typography
font-sans IranYekanX; serif Georgia; mono Geist Mono. Tailwind type scale xs12/16 sm14/20 base16/24 lg18/28 xl20/28 2xl24/32 3xl30/36 4xl36/40 5xl48/48 ...
Custom headings (Desktop|Mobile): heading-xl 48|30 bold; heading-lg 36|30; heading-md 30|30; heading-sm 24|24. letter-spacing 0.
## Layout
breakpoints sm640 md768 lg1024 xl1280 2xl1536. container-padding-x spacing/6=24 (both). section-padding-y 96|64. section-title-gap xl 24|16, lg 20|16, md 20|20, sm 16|16.
spacing: Tailwind 4px scale (0.5=2 ... 96=384).
## Radius: xs2 sm6 md8 lg10 xl14 2xl16 3xl24 4xl32 full9999
## Shadows: Tailwind v4 set (2xs, xs, sm, md, lg, xl, 2xl), inset, drop-shadow; blur xs4..3xl64

## DS file origin & structure (Documentation page, 2026-10-19)
- Base: commercial "shadcn/ui kit for Figma" by shadcndesign.com, Pro version (with Pro Blocks: Application, Landing Page), April 2025 edition, based on shadcn/ui 2.5.0 + Tailwind v4. Has companion plugin to export theme to code.
- Customizations by team: 2.Theme modes CE/Gold/B2E (brand), font IRANYekanX, navyBlue & gold palettes, extra semantic tokens (success/warning/info + -background, primary-border, secondary-border, alpha/*, custom/outline), 4.Custom responsive headings & section spacing, "Loyalty Gradient Fill" paint style, focus/default + focus/destructive effect styles.
- Component pages = full shadcn set (~50): Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Dialog, Drawer, Dropdown Menu, Form, Hover Card, Input, Input OTP, Label, Menubar, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toast[DEPRECATED], Toggle, Toggle Group, Tooltip + Utility Components, Icons, Assets, Draft.
- Separate team library "DS - Components" (custom/product components, file not yet shared) and "VA - DKB Logos", "VA - Banners", "VA - File Covers" are used by B2E file.
## Text styles (309): Tailwind matrix text-{xs..9xl}/{leading-normal|leading-none}/{thin..black, italic, underlined, strikethrough}, all IRANYekanX (weights Thin, UltraLight, Light, Regular, Medium, DemiBold, Bold, ExtraBold; "black" maps to ExtraBold — no Black weight). custom/heading-xl 48/48, heading-lg 36/40, heading-md 30/36, heading-sm 24/32 (Bold).
  Hygiene issues: "untitled" style names in 6xl/7xl leading-none; text-6xl leading-none "light" uses Regular; italic styles for Persian (meaningless).
## Effect styles (34): shadow 2xs..2xl, inset-shadow, drop-shadow, blur, backdrop-blur, focus/default, focus/destructive.
# DS - Components (Figma atIV81DYUiIm5mZ0EXA6rw) — custom product component library (team library used by B2E). Read 2026-10-19.
No own variables (1 stray "Variable collection"), no local text/paint styles → consumes DS - Shadcn tokens/styles.
Pages & component sets:
- Header: header {variant=guest/user/userWithOrder/inPanel/dropship; Mode=Desktop/Mobile; toggles: basket, categories, search, support call, badge, left button, 2nd button}; badge; orderInfo {downloadReceipt; default/hover; sm/lg}; orderStatus {delivered/multipleOrder/canceled/proccesing}; orderProgress; headerItem {icon swap, loyalty badge, label, badge, isDropdown, default/hovered} (has usage description); searchBar {default/active}; search {active/default/typing/filled} (has description); portalheader {Floating/Sticky}.
- Hero section: categoryImage (21 product images), categoryItem {L/S/XL}, rightWidget, leftWidget {lastPurchases/banner}, mainWidget, youMayLikeSection.
- Section: section — generic slot-based layout container {Variant=inPage/heroSection/inPanel/inMobilePanel; hasHeader, hasDescription, ShowAll Button, Show MainActions, Right/Left/Main slots, Comp.1–5 swaps}; Slot; modalSection {slots, header, close, Mobile Mode}; bottomNavigation.
- Categories, You may like section: empty pages.
- Bundles: bundleCard {hasFomo; mobile/desktop}; bundleFomo {gold/green/purple/neutral}; brandsPreview {1/2/3}.
- Bottom navigation: mobileBottomNav, mobileBottomNav/B2E, checkoutBottomNav, bottomNavItem {Name=Profile/Home/RFQ/Basket/Orders/Categories; Active/Default; badge}.
- Cards: product-card {size=desktop/mobile/compact; type=dkpc/dkp/b2e; hover/default; isCarousel; isAddedToCart; vertical/horizontal}; product-info {loyalty badge, color, guarantee, title; lg/sm; h/v}; price {base price, discount %, hasFrom; xs/s/md/lg; discount type None/Percentage/Text}; Quantity Selector {0/1/>1/Max; xs/xxs}; card-action {add/more}; product-image; basket-card v2.0 {Basket/Item; inStock/Out of Stock/Stock Change; Desktop/Mobile; Alert; Points}; basket-card v1.0 & v.test (legacy versions kept); Cart Points Earned.
- Profile: userInfo, Wallet, Credit, sidebarTab {Default/Hover/Active}, tabs, sidebar/B2E.
- Order Summary: orderSummary {Variant=B2E/CE; State=Default/WithShipment/withPayments; toggles: BankTransfer, Wallet, Credit, Cheque, IPG, Previous Payment, EmptyState}.
- PLP Filters: FilterItems {MultiSelect/Range/Switch; Active/Default/Expanded/Selected; Desktop/Mobile}; Filters {Desktop/Mobile}.
Observations: shared between CE(B2R) and B2E (variants Variant=B2E/CE, type=b2e, header variant dropship); product-card type dkpc (variant-level) vs dkp (product-level) vs b2e; versioned duplicates (basket-card v1/v2/test) not cleaned; typo "proccesing"; few component descriptions.
# B2E live CSS tokens (source: https://b2e.digikalabusiness.com/ computed stylesheets, 2026-10-19)
Stack: Next.js (pages router, /_next/static), 8 CSS bundles. html lang=fa, body direction rtl (html dir attr empty). Body font: IRANYekanX, sans-serif.
## Layers found in CSS (oldest -> newest, inferred from naming)
1. Digikala core legacy tokens (--color-*): brand-primary #e6123d (Digikala red), neutral-000..900 (#fff, #f0f1f2, #e6e7e8, #cdced1, #9a9da2, #81858b, #676a6f, #4d5053, #343538, #1a1b1c), dark-neutral-*, hint-object/text (error/success/caution), rating colors, delivery colors (jet, express, post...), partner brands (digipay, fidibo, digikalajet, club, irancell...), category colors (electronic, fashion, tools, sport, kids, beauty, stationary, home), luckydraw seasons, egift-card, corporate-giftcard-landing, mission, expiring points. Many -rgb twins mismatch their hex (copy-paste debt).
2. B2B overrides: --color-primary-500 #093672 / 700 #052044 / 300 #6b86aa / 200 defined twice (#9dafc7 and #1d4ed8); button-primary defined #093672 then overridden #5b21b6; icon-primary #093672 -> #5b21b6; secondary-500 #29b6f6 -> #5b21b6; b2b-green/red.
3. Loyalty tiers palette: basic, bronze, silver, gold, emerald, diamond (100..700 each).
4. shadcn (Tailwind v4, oklch, bare L C H triplets): :root primary 0.3428 0.1138 257.82 (~navy), plus success/warning/info(+background), destructive-foreground.
5. B2E theme (html:root, wins): primary oklch(40.26% 0.214 301.36) (~violet-800 #5b21b6), secondary 89% .08 295, background 95% (grey page bg, not white), foreground 32% (dark grey, not near-black), card 100%, muted-fg 52%, --border-b2e 81% .09 295, ring=primary, destructive 49% .18 27.3, warning 71% .15 66.4, info 69.5% .13 231.5. Dark variant exists (html.dark).
6. Tenant theme: html.theme-petropark — same structure with navy primary 28% .11 263 (#093672-ish), border-b2e 75% .07 263. => B2E supports per-company white-label themes via html class.
Radius tokens: --radius .625rem(10px) shadcn; legacy rounded-* (DEFAULT 4, sm2, md6, lg8, xl12, 2xl16, circle 50px); --global-radius 8, small 4, medium 8, medium-plus 12, large 16. text-xxs 10px exists (not in Figma). spacing-base 4px.
## Drift vs Figma DS
- Figma B2E brand primary = violet/800 -> live B2E html:root primary ≈ violet-800: MATCH.
- Figma background-light = white; live B2E background = 95% grey, foreground 32% grey: DRIFT.
- Figma radius lg = 10 matches shadcn --radius .625rem; legacy radius tokens (8/12/16) coexist: DRIFT/duplication.
- Live has loyalty, delivery, category color families not in Figma DS.
- Live has tenant theme (petropark); Figma Theme collection has CE/Gold/B2E only.
# B2E business rules — from live homepage FAQ (https://b2e.digikalabusiness.com/, 2026-10-19)
Brand name on site: «دیجی‌کالا بیزینس» (Digikala Business). Customer = organization (سازمان); account area = «پنل سازمانی».
## Ordering channels
- Two ways: (1) Online: add to cart -> pay. (2) RFQ «فرم درخواست خرید» / via sales expert: for price inquiry, unavailable items, quantities over site cap, bulk/multi-item.
- RFQ needs NO login. Fields (homepage form): name, organization name, phone, requested items list (file: image/Docx/PDF/Excel, max 20MB), description. In-panel RFQ: search catalog, pick items + qty; or upload list / free text.
- Sales-expert-created order: appears in panel as «در انتظار پرداخت» (awaiting payment). Items/qty/price NOT editable by customer. Proforma valid 24h, then must contact sales to avoid cancellation.
- Proforma «پیش‌فاکتور»: downloadable from order detail (both self & expert orders); used for internal org approval.
- Official invoice «فاکتور رسمی»: auto-issued after final payment & shipping; via panel or org email; stamped/signed copy via support.
## Payment
- Methods: org wallet «کیف پول سازمانی», online gateway (bank card), bank transfer «حواله بانکی», bank cheque «چک», credit «پرداخت اعتباری» (if activated), multi payment (combined).
- Wallet top-up: online gateway, normal transfer (upload receipt), identified transfer «واریز شناسه‌دار» (auto-matched).
- Credit «اعتبار سازمانی»: via support, documents reviewed. Repayment via wallet/transfer/gateway; debt & due dates in «تراکنش‌ها» section. Credit/cheque use -> guarantee cheque «چک ضمانت».
## Account
- Org registration: org name, national ID «شناسه ملی», contact info, registration documents. Support reviews docs (KYB) -> panel access activated -> can order, pay, request credit.
- Profile: contact/org details editable; legal/financial info only via support. Multiple addresses (HQ, warehouse, branches) chosen at checkout.
- Cancel/return: only via support. Refund -> back to wallet or credit; guarantee cheque returned.
## Content issues spotted
- Duplicate FAQ «فرآیند تایید حساب سازمانی چطور انجام می‌شود؟» appears twice.
- Profile answer shows raw code quotes: ' بله، ... ', (string literal leak).
- Typo: «سفارش شماره کارشناس» (should be «را»).
## Live IA (logged-out homepage)
Header: logo, search «جستجو در دیجی‌کالا بیزینس», «ورود / ثبت‌نام» (/login?redirect=true), cart (سبد خرید).
Sections: hero slider (RFQ promo «درخواست تامین کالای سازمانی»), side banners «سبدهای ویژه», «خرید عمده»; «سبد های ویژه» band; «دسته‌بندی‌ها» (لپ تاپ /products/5, نوشت افزار /products/263, کالاهای سوپرمارکتی /products/36, کارت هدیه /products/403, صندلی اداری /products/328, ماشین های اداری /products/246); «پرفروش ترین ها»; «خرید عمده» (product with «15 عددی» pack badge); RFQ form «ثبت درخواست خرید»; FAQ.
Mobile bottom nav (<~1024): خانه /, دسته‌بندی‌ها, سبد خرید, سفارش‌ها /profile/orders, حساب کاربری /profile.
Routes seen: /, /login, /rfq, /products/{categoryId}, /pdp/{productId}, /profile, /profile/orders.

## Public pages (logged out), 2026-10-19
- /products/5 (لپ تاپ) & /products/263 (نوشت افزار): «موردی یافت نشد» (empty). PLP has filters sidebar «فیلترها»: قیمت, سیستم عامل, ظرفیت حافظه RAM, مدل پردازنده گرافیکی (accordion). Breadcrumb present. => catalog seems inactive / not populated (user said B2E is inactive).
- /pdp/54575: breadcrumb, title, product code 200003, «گارانتی اصالت و سلامت فیزیکی کالا», return-policy note, price ۱۰۲,۷۵۲,۳۴۰ (no currency label shown), «افزودن به سبد خرید», «محتویات بسته» (bundle: 15 × powerbank 45W PB20A — title says 35W: data mismatch). So a "product" can be a PACK/bundle of N units of a DK product.
- /rfq: requires login -> /login?redirect=true.
- /login: «ورود | ثبت‌نام», «سلام!», mobile number entry, «شماره تلفن وارد شده، باید به نام خودتان باشد.», «ورود», terms line (missing spaces bug: «پذیرششرایط ثبت‌ناموقوانین حریم خصوصیاست»). => phone + OTP auth, combined login/register.
## Components in live DOM: shadcn v4 data-slot attrs (accordion, breadcrumb, button, input). Buttons: primary bg violet (oklch .4026 .214 301.36) r6 h36 14/500; outline variant (درخواست خرید) border 1px primary; ghost. Legacy «بازگشت به بالا» button r8 h40 12/700 border #e6e7e8 (old DK style) in footer.
# B2E Figma — Presentation page (Phase 2 screens). Source: Figma XWgwct0LovI8Nu48ALSJp2 page 11177:86351. Read 2026-10-19.
Visual: designs use NAVY primary (DKB logo navy, navy filled buttons) — live site uses VIOLET. To verify which Theme mode frames use.

## Auth (section login #11182:90337) — split layout: left brand panel (navy gradient, boxes illustration, card «تامین یکجای نیازهای سازمان / همه نیازمندی‌های سازمان خود را به صورت یکجا از دیجی‌کالا بیزینس تامین کنید.»), right form
1 login 1: «ورود به فروشگاه», «برای ورود به فروشگاه شماره موبایل خود را وارد کنید.», field «شماره موبایل», btn «ارسال رمز» (disabled until valid), legal line.
2 login 2: filled (enabled).
3 login 3: «تایید شماره موبایل», «رمز یکبار مصرف ارسال شده به شماره زیر را وارد کنید.», phone + edit, 4-digit OTP, countdown ۰۰:۵۹, resend «ارسال رمز».
4 login 5: OTP filled, button loading «در حال ورود».
5 Registration - Choose Account mode: modal «برای خرید از دیجی‌کالا بیزینس، شما باید حساب سازمانی خود را ساخته و فعال کنید.» [تایید و ادامه] [انصراف]  => logged-in individual w/o org must create org account.
Live drift: live login copy «سلام! لطفاً شماره موبایل خود را وارد کنید / شماره تلفن وارد شده، باید به نام خودتان باشد.» vs Figma «ورود به فروشگاه».

## KYB (section #11177:86402) — 3-step stepper: ۱ اطلاعات سازمان → ۲ اطلاعات نماینده → ۳ شرایط و قوانین استفاده; centered card on grey bg, logo top.
Step1 org: info alert «اطلاعات شناسایی سازمان باید منطبق بر اطلاعات ثبتی شرکت باشد.»; fields: نام سازمان, شناسه ملی سازمان, استان (select), شهر (select), کد اقتصادی شرکت, معرفی‌نامه رسمی (file). CTA «تایید و ادامه» (disabled→enabled).
Step2 representative: read-only company summary fetched from registry (شماره ثبت, نام شرکت, کد پستی, شماره تماس, آدرس پستی) + alert «اطلاعات شناسایی باید متعلق به شماره‌ای باشد که با آن وارد سیستم شده‌اید.» (typo «متلعق»); fields نام, نام خانوادگی, کد ملی; [تایید و ادامه] [بازگشت].
Step3 T&C: scroll text (placeholder repeated about Sayadi cheque «چک صیادی» for credit; mentions «تکنوپی» — partner?), checkbox accept, CTA.
Submitted: success icon, «اطلاعات شما با موفقیت ثبت شد», «پس از بررسی و تایید اطلاعات حساب شما فعال خواهد شد و از طریق پیامک به شما اطلاع‌رسانی می‌شود.», «بازگشت به صفحه اصلی».
KYC - Submitted (#11281:81350): «درخواست شما با موفقیت ثبت شد ...» (naming inconsistency KYB vs KYC).

## Homepage (2 versions: #11182:90351 logged-in long, #11299:7866 shorter)
Header row1: logo, search «در میان بیش از ۱ میلیون کالا جستجو کنید», cart (badge), profile, «۲ سفارش جاری», «سفارش‌ها». Row2: «دسته‌بندی کالاها» (mega menu), «پرفروش‌ترین‌ها», «درخواست خرید» (outline btn). Org Context Bar (on Cover page explorations).
Hero: main slider + 2 side tiles («سبدهای ویژه», «خرید عمده» + «مشاهده محصولات»). Slides: gift card «قدردانی سازمانی با یک هدیه‌ی به یادماندنی / کارت هدیه فیزیکی و دیجیتال با طرح و مبلغ دلخواه / سفارش کارت هدیه»; gold bullion «پشتوانه‌ی سازمانی یا هدیه برای سرمایه انسانی / خرید مستقیم شمش و طلای آبشده / ثبت سفارش»; RFQ «درخواست تامین کالای سازمانی / در حجم محدود یا انبوه، با تنوع نامحدود / ثبت درخواست»; brand «مرجع خرید عمده ادارات و سازمان‌ها / ثبت‌نام در دیجی‌کالا بیزینس».
USP row (4): تامین یکجای نیاز سازمانها, ارسال سریع سفارشات, شرایط متنوع پرداخت, قیمت‌گذاری به نرخ عمده.
«دسته‌بندی‌های برگزیده» (circular category tiles): مواد غذایی, نوشیدنی, کارت هدیه, نوشت افزار, ماشین های اداری, «مشاهده همه».
Logged-in personalization: «آخرین سفارش‌های شما» (order cards), «پرتکرارترین محصولاتی که خریده‌اید» (reorder).
Category carousels on themed banner background: «تجهیزات اداری», «شستشو و نظافت» (product cards w/ price, discount %, add-to-cart stepper).
FAQ, footer (logo «digikala BUSINESS», phone ۰۲۱-۶۱۹۳۰۰۰۰, 24/7 support, about text, socials, trust badges e-namad etc., «بازگشت به بالا»).

## PLP #11213:2765
Breadcrumb; sort «مرتب‌سازی:» پرفروش‌ترین | پیشنهاد خریداران | گران‌ترین | ارزان‌ترین; filters sidebar: «فیلترها», «حذف فیلترها», برند, رنگ, محدوده قیمت, دسته‌بندی, toggle «کالاهای موجود».
Product card: image, title (2 lines), rating ۴/۷, price, strikethrough + discount badge (%), badges «پایین‌ترین قیمت ۳۰ روزه», «بهترین قیمت بازار», add-to-cart action (cardAction).

## PDP #11216:90597
Gallery; title; DKP code; rating «(امتیاز ۸۳ خریدار)»; color select; «ویژگی‌ها» key specs + «مشاهده همه ویژگی‌ها»; return-policy note; guarantee.
BuyBox: seller («فروشنده», «۲ فروشنده دیگر»), seller scores (اورجینالت, عملکرد «عالی»), price + discount, «افزودن به سبد خرید», quick qty chips «انتخاب سریع تعداد» ۵/۱۰/۱۵ عدد, rule «حداکثر تعداد قابل سفارش آنلاین: ۱۵ عدد. برای سفارش تعداد بیشتر، درخواست خود را در قالب «درخواست خرید» ثبت کنید.» + «ثبت درخواست خرید». BuyBox states: Default/Added/Max.
«فروشندگان این کالا» list (SellerRow states Default/Added/Max, «درخواست خرید تعداد بالاتر»), «کالاهای مشابه», «مشخصات» (specs table), «بررسی تخصصی» (expert review), comments.
Modals: «ثبت دیدگاه» 2-step (rating 1–5 first «مرحله ۱ از ۲»), «ثبت پرسش» (textarea). Legal: «ثبت دیدگاه به معنی موافقت با قوانین انتشار دیجی‌کالا است.»

## Cart #11217:92321
«سبد خرید (N کالا)»; line: title, variant (color), unit price «قیمت هر واحد: X تومان», qty stepper, line total, discount %, seller name (third-party seller e.g. «همایون تلکام…»), points earned. Note «در صورت اتمام موجودی پیش از پرداخت، کالاها حذف می‌شوند.»
Bill box «صورتحساب» «(شامل ۱۰٪ مالیات)»: قیمت کالاها (N عدد), هزینه ارسال (رایگان), تخفیف, مبلغ قابل پرداخت, CTA «ثبت اطلاعات ارسال».
## Checkout – Shipment #11217:93487
«آدرس تحویل سفارش» (address, mobile, receiver «گیرنده») + «تغییر یا ویرایش آدرس». «مرسوله‌ها» split by fulfilment: «ارسال فروشنده» vs «ارسال دیجی‌کالا», each «مرسوله N» with item thumbs + qty; delivery timeslot picker (weekday/date, slots «ساعت ۹ تا ۱۷», «ساعت ۱۷ تا ۲۳», cost, «تکمیل ظرفیت» full). Summary «خلاصه سفارش», CTA «تکمیل پرداخت». Notes: «فاکتور پس از تحویل کامل کالا، از طریق صفحه جزییات سفارش قابل دانلود خواهد بود.», «قیمت‌ها شامل ۱۰٪ مالیات بر ارزش افزوده است.»
## Payment Methods #11217:93495
«انتخاب روش پرداخت». Multi-payment with «باقی‌مانده پرداخت» (remaining). Rule alert: «مبلغ پرداخت آنلاین بیش از سقف ۴۰۰ میلیون تومان است. لطفاً یک روش پرداخت دیگر هم انتخاب کنید.» Methods: wallet switch «استفاده از موجودی کیف پول» (balance, «افزایش موجودی»), cheque «چک صیادی» «افزودن چک» («چک‌های باز», «باقیمانده سقف اعتباری»), «اعتباری دیجی‌پی» (installments ۱/۴ قسط), «اقساطی دیجی‌پی», «کیف پول دیجی‌پی», «کارت هدیه», «کد تخفیف».

## Profile shell (orders/RFQ/order detail): right sidebar profile card
«احراز هویت شده» badge, «کاربر حقوقی», name, phone, org name; wallet «کیف پول» balance + «افزایش موجودی»; «اعتبار خرید» / «حد اعتباری شما» + «بازپرداخت اعتبار»; menu: سفارش‌ها, مدیریت چک‌ها, درخواست‌های خرید, آدرس‌ها, اطلاعات کاربر, تماس با پشتیبانی, خروج.
Orders «سفارش‌های من» tabs: همه | در انتظار پرداخت | در‌حال پردازش | تحویل شده | لغو‌شده. Card: status + validity «در انتظار پرداخت | اعتبار: تا ۱۰ ساعت دیگر», «سفارش ۳۴۵۲۱», datetime Jalali «۱۴:۳۰ - ۱۴۰۴/۰۹/۱۵», shipments «مرسوله ۲ از ۳», items «+ ۲۵ کالای دیگر», «سفارش مجدد».
Order detail (expert/RFQ order): «دانلود پیش‌فاکتور», status, «این پیش‌فاکتور تا ساعت ۲۲:۰۰ روز ۱۲ شهریور ۱۴۰۴ معتبر است.», table (# , نام کالا, تعداد, قیمت واحد, قیمت کل), «توضیحات» (e.g. item not suppliable), totals (مبلغ کل سفارش, مالیات بر ارزش افزوده, هزینه ارسال, مبلغ قابل پرداخت), CTA «تایید و نهایی کردن سفارش». orderDetail variants: From=RFQ / From=User × Desktop/Mobile.
RFQ list «درخواست‌های خرید» tabs: همه | در انتظار بررسی | در انتظار پرداخت | پرداخت شده | پایان یافته | لغو شده; table: #, شماره درخواست, تاریخ ثبت, وضعیت (در حال بررسی…), action «تایید و نهایی کردن سفارش».
RFQ create «ثبت درخواست خرید» (logged-in): name, org, phone, description; «افزودن کالاهای درخواستی»: «آپلود لیست کالاها» OR «جستجو و انتخاب کالاهای درخواستی» (search → «افزودن»), list with «تعداد درخواستی», «سایز», «رنگ مورد نظر»; empty state «هنوز هیچ کالایی به این لیست اضافه نشده است. می‌توانید از طریق نوار جستجو و یا آپلود فایل...»; «تماس با پشتیبانی».

## Components page (8077:2705) — local B2E components
category(Level1-3, Default/Hover, Desktop/Mobile), rowMain(guest/registered), rowSecond, header(Default/scrolled), profile modal, menu-item, PLPFilters, img(small/more/main), ColorSelect, BuyBox(Default/Added/Max), ProductSpecs, comment(desktop/mobile), SidebarBasketList, SidebarBottom, orderItems, shipmentItems, timeslot(default/selected), SellerRow, dateSelection, redeemCode, giftCard, giftCardList, qty, orderHeader, OrderOverview, ProductRow(Horizontal/Square), shipment, rfqList(Empty/Full × D/M), rfqDetail, orderDetail(RFQ/User × D/M), ordersList(Full/Empty × D/M), MobileFilters(Orders/RFQs), rfqSearchBar, category icons (digitalproducts, stationary, tools, fmcg, homeappliances, giftcard, health, homeandkitchen, localproducts, beauty, momandchild).
Other comps on Presentation: slider, progress bar, USP-box/item, time, main-slider, megamenu, searchbar.
# B2E Figma — Exploration page (1:13). Sections: Edited, Developed, Phase 1, Phase 2. Read 2026-10-19.
"Developed" section = what was handed to dev (mirrors Phase 1 + parts of Phase 2): Login/Signup, KYC, KYB, Homepage, PLP, PDP, RFQ, Basket, Shipment, Payment, Profile & My Orders, Profile-RFQ.
Benchmarks page: business.amazon.com, staplesadvantage.com, alibaba.com, 1688.com, aliexpress, faire.com, indiamart, tradeindia, globalsources (+ screenshots).
Archive: older homepage, SidebarFilter variants, GiftCard PDP Enterprise, Redeem Gift Card, PDP explorations.
Theme check: homepage frame has NO explicit variable mode -> renders in Theme default (first mode = CE, navy). So Figma B2E screens are in CE/navy while live B2E is violet (B2E mode). => Figma screens not switched to B2E mode.

## Phase 1 logic
- KYC (individual/representative?): fields incl. national ID, first/last name, birth date (۱۳۵۸/۱۱/۰۹), province, document upload (javaz.pdf = license). T&C «شرایط و قوانین استفاده از امکان خرید سازمانی», checkbox «شرایط و قوانین دریافت اعتبار را می‌پذیرم.»
- KYB variants: Company info (auto-fetched by national ID from registry), «KYB - Non Systematic» (company NOT found in registry → manual: email, upload company paper/intro letter PDFs), Additional Info (نام نماینده شرکت, کد ملی نماینده شرکت).
- Profile unverified state: «اطلاعات ثبت شده شما تایید نشد. لطفا دوباره نسبت به ارسال آن از طریق بخش «اطلاعات کاربر» اقدام کنید.» CTA «اصلاح اطلاعات»; badge «احراز هویت نشده» vs «احراز هویت شده»; «کاربر حقوقی» (legal entity).
- Orders: «در انتظار پرداخت مهلت: ۱۲ ساعت» (payment deadline), order can be named campaign basket e.g. «فروش ویژه سامسونگ | سبد شماره ۹۴۲».
- Order detail states: Waiting for payment – Valid (proforma valid until date/time; CTA «تایید و پرداخت»), – Expired («این پیش‌فاکتور منقضی شده است. پیش از پرداخت جهت هماهنگی با پشتیبانی تماس بگیرید.»), Processing («دانلود ‌فاکتور»), Payment done (receiver «تحویل‌گیرنده», «کد تحویل: ۱۶۲۷۳۶» delivery code, shipments with delivery slot «دوشنبه ۱ اردیبهشت - ساعت ۹ تا ۲۲»). Partial supply message: «امکان تامین برخی کالاهای درخواستی شما در حال حاضر وجود ندارد.» + per-item note.
- Checkout shipment: «اطلاعات ارسال», shipments «مرسوله ۱ | ارسال رایگان», slot; summary with «روش پرداخت – هنوز روش پرداخت این سفارش مشخص نشده است.», CTA «نهایی کردن سفارش».
- Payment rules (frame names = rule cases): Order Total < IPG Limit; Order Total > IPG Limit (online cap 400M Toman → must combine); Remaining Amount < Wallet + Credit; Using Wallet & Credit; Add bank transfer info; Bank Transfer Limit («مبلغ حواله نباید بیشتر از ... باشد»); multiple bank transfers allowed (2nd Bank Transfer Added); Payment without IPG.
- Bank transfer form «افزودن حواله بانکی»: بانک مقصد (select), شماره حساب, شماره شبا (shown, copyable), مبلغ پرداختی, تاریخ پرداخت (سال/ماه/روز Jalali), تصویر رسید (upload, clear image), CTA «تایید و افزودن حواله». Added transfer chip: «۱۲۳,۰۰۰,۰۰۰ تومان حواله بانک سامان به تاریخ ۱۴۰۴/۰۵/۲۲».
- Request credit: section «درخواست اعتبار» + success alert «درخواست اعتبار شما با موفقیت ثبت شد. کارشناسان دیجی‌کالا پس از بررسی درخواست، با شما تماس خواهند گرفت.»
- RFQ (Phase 1 sheet): «درخواست خود را شرح داده و یا فایل ... بارگذاری کنید.», «شرح درخواست», «آپلود فایل» (PDF/Excel), «تایید و ثبت درخواست»; success «کارشناسان دیجیکالا پس از بررسی درخواست شما با شما تماس خواهند گرفت». RFQ list statuses: جدید, در حال بررسی, پایان یافته, لغو شده; columns کد درخواست, تاریخ ثبت, وضعیت, شرح.

## Phase 2 additions
- Header variants: Desktop Guest/User × Default/Scrolled; Mobile Guest/User. Profile dropdown: name, اعتبار خرید, درخواست‌های خرید, آدرس‌ها, اطلاعات کاربری, خروج از حساب.
- Bottom nav (mobile): Default, With Badge, Active tabs.
- Search: Desktop Default/Filled/Active/Typing; Mobile Default/Typing/Results-Empty. Suggestions «همه کالاهای {q}», «{q} در دسته …». No-result → RFQ: «جستجوی شما نتیجه‌ای نداشت. می‌توانید درخواست خود را از طریق فرم درخواست خرید ثبت کنید.» + «ثبت درخواست خرید».
- Sidebar filters: MultiSelect / Range / Switch × Default/Expanded/Selected/Active.
- Buy box: Default / Item added / RFQ. Specs table Compact/Expanded. Review Compact/Expanded. Submit review 2 steps; submit question.
- RFQ from PDP (logged in): qty «تعداد مورد نظر:» + «تایید و افزودن به لیست درخواست خرید»; success «کالای مورد نظر به درخواست خرید شما اضافه شد ... » [نهایی کردن درخواست خرید] [ادامه جستجو در دیجی‌کالا]. => RFQ is a "list/basket" that accumulates items.
- RFQ form items have optional «قیمت پیشنهادی» (proposed price), color, size, qty; file alternative.
- RFQ → Order conversion: «درخواست خرید شما به عنوان سفارش ۲۰۲۹۱۲۸۳ در بخش سفارش‌ها افزوده شده و آماده پرداخت است.» + «مشاهده سفارش». RFQ filter sheet: همه, در انتظار بررسی, پایان یافته, لغو شده.
- Delivery time sheet: تاریخ ارسال, ساعت ارسال, تایید/انصراف.
- ReOrder («سفارش مجدد»): list of past items with availability states: out of stock «در حال حاضر این کالا موجود نیست.», alternative seller «… از فروشنده دیگری قابل سفارش است.» + «سفارش از فروشنده دیگر», max cap «در حال حاضر حداکثر تعداد موجود برای سفارش ۵ عدد است.», CTA «افزودن کالاها به سبد خرید». Shipping promise «ارسال دیجی‌کالا از ۱ روز کاری دیگر».
- Gift Cards: Landing (types: سازمانی / الکترونیک / فیزیکی; designs e.g. «طرح گل» range ۲۰۰ هزار–۲۰ میلیون تومان; bulk request form «درخواست خرید کارت هدیه»), PDP Enterprise (marketing: tiered discounts «تخفیف‌های پلکانی», fast delivery, customization: logo/design), PDP Electronic (select value «انتخاب اعتبار»), PDP Physical.
- Image assets: hero-side-specialbundles, hero-side-omde, carousel-bg-specialbundles/bestsellings/wholesale, category-* images, specialbundles-(lavazemedari, tashrifatpazirayi, behdashtnezafat, kharobar).
# B2E live — logged-in walkthrough (unverified individual account, no org yet). 2026-10-19. Read-only; nothing submitted.
- Profile shell (all /profile/*): warning alert top «برای خرید، نیاز است حساب کاربری خود را تأیید کنید.» + CTA «شروع احراز هویت»; badge «احراز نشده»; phone; «کیف پول ۰» + «افزایش موجودی»; «حد اعتباری شما» + «درخواست اعتبار»; menu: سفارش‌های من, درخواست‌های خرید, آدرس‌ها, اطلاعات کاربر, تماس با ما, خروج.
- /profile/orders «سفارش‌ها» tabs: همه | در حال بررسی | در حال انجام | تحویل شده | رد شده | در انتظار پرداخت | در انتظار تایید | بسته شده (= code labels, not Figma). Empty: illustration (legacy Digikala red/teal character — off-brand) + «سفارشی ثبت نشده.»
- /profile/rfq «درخواست‌های خرید» + «ثبت درخواست جدید»; tabs همه | جدید | در حال بررسی | پایان یافته | رد شده; empty «درخواست خرید ثبت نشده.»
- /profile/credit, /profile/wallet/cash-in, /checkout/cart → silently REDIRECT to /login for unverified user (no explanation) — UX bug.
- /profile/personal-info «اطلاعات کاربر» > «اطلاعات هویتی»: نام و نام خانوادگی, تاریخ تولد, تلفن همراه, کد ملی (shown as «--» when empty).
- /profile/addresses empty: «هنوز آدرس ثبت نکرده‌اید.» + «ثبت آدرس».
- /basket = «سبدهای روز» (daily bundles) — empty text says «سبد موبایل موجود نیست.» (wrong copy) + «شما می‌توانید محصولات دیگر ما را ببینید.» + «مشاهده همه محصولات».
- /rfq (logged in): «افزودن کالاهای درخواستی», «آپلود لیست کالاها», «ثبت درخواست خرید», «اطلاعات زیر را تکمیل کرده و درخواست خود را ثبت کنید.», نام شما, نام سازمان, شماره تماس, شرح درخواست, «ثبت درخواست». (No product search-and-add as in Figma Phase 2.)
- /products/special «جشنواره‌» (festival) — empty; breadcrumb «دیجی‌کالا بیزینس/». /search?q=کاغذ — filters دسته‌بندی, قیمت; «موردی یافت نشد.» + «مشاهده همه محصولات» (no RFQ fallback, unlike Figma).
- «شروع احراز هویت» → /login?step=personType: card «حساب کاربری خود را انتخاب کنید:» two option cards: «حساب حقیقی — مناسب اشخاص و فروشگاه‌ها — صدور فاکتور رسمی به نام شخص حقیقی» and «حساب حقوقی — مناسب شرکت‌ها — صدور فاکتور رسمی به نام شرکت», each «انتخاب و ادامه». Logo navy while UI violet.
- Layout at ~770px: desktop profile sidebar AND mobile bottom nav both visible; sidebar labels wrap; order tabs overflow horizontally → missing tablet breakpoint handling.
# Frontend code — git.digikala.com/b2b/b2b-shop-front (project 3311, default branch develop). READ ONLY. Read 2026-10-19.
Other repo: b2b/b2b-platform (3346, master) = backend: Laravel + Bagisto (open-source e-commerce) + REST API, has CLAUDE.md, AGENTS.md, docs/. 
## Monorepo (Nx, yarn workspaces, Biome lint, husky, standard-version releases per app)
apps/website = B2R (CE) — Next.js (app/ dir + modules/). Modules: Basket, Campaign, Carousels, Category, Checkout(111 files), Credit, DropShip(275!), Home, NewHome, KomitehEmdad(47), Landing, Loyalty(39), PDP, Products, Profile(167), RFQ, StaticPages, User, shared(319).
  Routes: basket, campaign, carousel, categories, checkout, club, credit, drop-ship, komiteh-emdad, landing, login, loyalty, page, pdp, plp, products, profile, rfq, search.
apps/b2e = B2E — Next.js app router (src/app) + src/modules. Scripts dev:b2e/build:b2e.
apps/portal = Enterprise Portals — near-fork of b2e (same routes + carousel, credit/eghtesad-novin (bank loan landing/apply/thank-you), failed-auth (external auth/SSO), UnderConstruction gate, VerticalPrivateGate, cbi regions (regionBar), vertical-config (multi-tenant config)).
libs/ui-kit = "@digikala/ui-kit": shadcn/ui (style new-york, rsc, baseColor slate, cssVariables), Radix + Tailwind; ~62 components; Storybook 8.6; MCP server for AI (components, tokens, utility classes, Figma links). README last updated 2025-01-26 (docs listed: STORYBOOK-GUIDE, QUICKSTART, FIGMA-INTEGRATION, SETUP-STATUS, CHECKLIST — only README & QUICKSTART exist in tree).
  ui components: accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb, button-group, button(+stories), calendar, card(+stories), carousel, chart, checkbox, collapsible, combobox, command, context-menu, data-table, date-picker, dialog, drawer, dropdown-menu, empty, faq, field, form, grid-list-view, hover-card, iconMerge, infinite-scroll, input-group, input-otp, input(+stories), item, kbd, label, menubar, native-select, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toaster, toggle-group, toggle, tooltip, typography; motion/Reveal.
  Only 3 components have stories (button, card, input).
  constants: borderRadius, breakpoints, colors, sizeUtility, spacing, typography (JS) + schemas/colorSchema.js; styles: font.scss, global.css, theme.css.
  modules/hybrid-payment: bill-box, method-list with strategy pattern & registry: cheque, credit (DKB credit), digipay-bnpl, digipay-credit, digipay-wallet, eghtesad-novin-loan, ipg, mehrad-wallet, parsian-ipg, wallet; store usePaymentMethodStore; icons DigikalaBusiness, Digipay, EghtesadNovin, Mehrad, sep-ipg, top-ipg.
libs/mega-seeds = LEGACY Digikala component lib (SCSS + own storybook): Anchor, AppTopBar, Badge, Banner, BottomSheet, Checkbox, CountDown, DkSlider, EmptyState, FabButton, Form, Hint, Icon, Image, ListInfiniteLoader, Pagination, Popover, Progressbar, RangeInput, Skeleton, Slider, TextField, Title, Toast, accordion, button, chip, drop-down, modal, tabs, textarea, tooltip, upload-box... => two component systems coexist.
libs/dk = Digikala core shared (api, components 83, constants, hooks, services, transformers, types, utils 228, fonts, 615 icons, tailwind-config with plugins) — origin of legacy --color-* tokens.
libs/hooks, libs/utils (date, number, string...), libs/monitoring (OpenTelemetry, web-vitals, Sentry).
mcp-docs/FIGMA-MCP-GUIDE.md, MCP-GUIDE.md; .mcp.json, cursor-mcp-config.json, .codex => team already uses AI agents.
docs/ssr-migration-plan/proposal/tasks.md. apps/b2e/docs/preview-venus-previewmode.md (CMS preview "venus").
Deps: Next (@next/third-parties 16.3), Radix, react-hook-form + resolvers, Redux Toolkit, TanStack Query, GrowthBook (feature flags / A-B), Sentry, OpenTelemetry, Popper.
Active branches (Oct 2026): Feat/orders-redesign (10-17), Feat/DKB-6727_promoters_ui (10-18), Feat/order-awaiting-payment (10-12), Feat/cart-redesign-portal-b2e (10-04), DKB-6420 remove stable feature flags, cart redesign/recommender (Jul), sticky filter, PLP filter redesign, loyalty, drop-ship, terms page, storybook, replace_button_with_uiKit. Jira key DKB-*.
## B2E route map (apps/b2e/src/app)
/ (home), /(landing)/services, /login, /search, /products, /products/[...category], /products/special, /plp/[id], /pdp/[id], /rfq, /basket, /checkout/cart, /checkout/cart/payment/[[...slug]], /checkout/shipping, /checkout/payment/[[...slug]], /checkout/order-payment, /checkout/preinvoice, /checkout/repayment, /checkout/thank-you, /profile, /profile/orders, /profile/orders/[slug], /profile/orders/[slug]/invoice, /profile/orders/[slug]/pre-invoice, /profile/rfq, /profile/rfq/[quote], /profile/rfq/[quote]/[...slug], /profile/credit, /profile/credit/receipt, /profile/wallet/[...slug], /profile/wallet/receipt, /profile/addresses, /profile/personal-info, /page/contract, /page/privacy, /page/terms, /preview/homepage (CMS preview).
B2E modules: Basket, Cart, Checkout{Cart, CheckoutCart, OrderPayment, Payment, PaymentV1, PreInvoice, Repayment, Shared, Shipping, thank-you}, Home (VerticalConfigProvider), Landing/Services, PDP, Products, Profile (113 comps), RFQ, StaticPages, User (26), shared{PDP, Products, User, api, components(105), events, layouts(45), statics(165), vertical-config}.
## Tokens in code
ui-kit theme.css (:root): shadcn oklch triplets; primary 0.3428 0.1138 257.82 (navy ≈ #093672) = CE default; + success/warning/info(+background), destructive-foreground; loyalty 6 tiers × 7; text xxs10..9xl; legacy rounded-* (sm2, small4, DEFAULT4, md6, lg8, xl12, 2xl16...) vs --radius .625rem; weights; leading. .dark set.
apps/b2e/src/styles/theme-b2e.css (html:root override): primary #5B21B6 purple; secondary #DDD6FE light purple; accent comment says "Pink #ed1944" but value is grey 95% (stale comment); background #f0f1f2 grey, foreground #4d5053; muted-fg #81858b; --border-b2e #C4B5FD (purple border for secondary buttons); input #e6e7e8; ring = primary; destructive #d32f2f; warning #f9a825; info cyan; body bg forced #fff !important (contradicts --background grey).
apps/b2e/colors.ts (legacy Tailwind palette): primary 100-300 navy tints (#ced7e3,#9dafc7,#6b86aa) then 400-900 ALL #5B21B6 (broken scale); secondary 500 = #5B21B6 inside a cyan scale (broken); neutral #fff..#1a1b1c (DK greys); alert/warning/success 100/300/500/700.
=> Token debt: 3 sources of truth (Figma Theme collection, ui-kit theme.css + per-app overrides, legacy colors.ts/libs/dk), broken palette scales, B2E uses grey background & dark-grey text unlike Figma (white / near-black).
# B2E domain model from code (apps/b2e/src/modules/Profile/{constants,types}) — 2026-10-19
## Order statuses (backend Bagisto-based): draft | pending | processing | completed | canceled | closed | pending_payment | order_approval (+ comment mentions fraud)
UI tabs & labels (code): همه | در حال بررسی(pending) | در حال انجام(processing) | تحویل شده(completed) | رد شده(canceled) | در انتظار پرداخت(pending_payment, color #5B21B6) | در انتظار تایید(order_approval, #D1A654) | بسته شده(closed)
  Figma labels differ: «در‌حال پردازش», «لغو‌شده»; Figma has no «در انتظار تایید» / «بسته شده».
  Status colors hardcoded hex in constants (#A2A4A9, #4CAF50, #91949A, #5B21B6, #D1A654) — not tokens.
Order fields: increment_id (display no.), status_label, channel_name (multi-channel), items (sku, qty_ordered/canceled/invoiced/shipped/refunded, price, discount, tax_percent/amount, children = bundle items, additional.attributes = configurable options, inventory_source_id), totals (sub_total, discount, tax, shipping, grand_total; formatted_* strings from backend), shipping_address, payments[] (method, source, type, reference_number, status accepted|pending|rejected).
## RFQ = quote negotiation (Bagisto B2B RFQ): RFQStatus NEW(جدید) | IN_PROGRESS(در حال بررسی) | PURCHASED(پایان یافته) | REJECTED(رد شده)
Quote line: product, quantity, supplier_id/supplier_name, quoted_price, is_requested_quote. Thread: customer_quote vs supplier_quotes (first/last), sample_unit, sample_price, price_per_quantity, note/description. Quote header: quote_title, quote_brief, name, company_name, address, phone.
Quote message tabs: پیشنهاد جدید(New) | پیام‌های فروشنده(Answered) | پیام‌های من(Pending) | تایید شده(Approved) | رد شده(Rejected).
  Figma RFQ statuses differ again: «در انتظار بررسی, در انتظار پرداخت, پرداخت شده, پایان یافته, لغو شده».
## Credit (اعتبار): RequestCredit {amount, used_amount, available_amount, status, expires_at}; Credit installment {order_id, amount, penalty_amount, status paid|pending|overdue, due_date, transactions(repay|withdraw|refund)}. Tabs: سررسید‌های امروز | سررسید‌های آینده | پرداخت شده. RETRY_DISCARDED_DAY_LIMIT=14.
## Wallet: tabs افزایش موجودی (cash-in) | تراکنش‌ها; bank sources for transfer: Parsian (IBAN + account no.; Mellat commented out). Transaction type deposit.
## Profile menu (code): سفارش‌های من, درخواست‌های خرید, آدرس‌ها, اطلاعات کاربر («خلاصه فعالیت‌ها» dashboard commented out). Routes also: /profile/credit, /profile/wallet.

## Vertical (tenant) config — apps/b2e/src/modules/Home/VerticalConfigProvider.tsx & shared/vertical-config/types.ts
B2E = vertical slug 'b2e', basePath '/', apiChannel 'b2e', event prefix 'b2e_'. Branding: logo /statics/img/svg/b2e-logo.svg, title «دیجی‌کالا بیزینس», primaryColor #5B21B6.
Feature flags per vertical: rfq ✔, basketTypeProduct ✘, creditPage ✔, loyaltyPage ✔, personTypeStep ✔ (individual vs legal), eContractStep ✔, requireCompanyLetter ✔, legalAccount ✔, geoFields ✔, logoutButton ✔, awaitingPaymentOrders ✘ (cart section listing saved-unpaid orders with countdown & pay button).
Portal app (apps/portal) verticals: mehrad, shad (both external SSO: Mehrad, Shad auth callbacks), cbi, cbint (CBI staff outside Tehran, DKB-6366). Unprefixed root is restricted → /failed-auth «شما به این صفحه دسترسی ندارید». Typo-tolerant vertical slug matching. Active vertical stored in localStorage + cookie.
=> Design must be white-label: logo, primary color, feature toggles per tenant; same screens serve B2E and Enterprise portals.

## Registration / KYC-KYB steps (apps/b2e → shared/User): Step type
login → verify (OTP) → personType (حقیقی/حقوقی) →
  individual: individualForm → individualFormResult
  legal: legalForm → legalFormCompanyNationalCode → legalFormCompanyDetailConfirm | legalFormCompanyDetailExists | legalFormCompanyDetailOffline (not in registry, manual) → legalFormCompanyAuthorization → legalFormCompanyLetter (letterhead/معرفی‌نامه) → legalFormResult
  → eContract (sign electronic contract) → pending (awaiting review)
Error branches: individualExistsWithOtherPhone, individualExistsAsLegal, legalExistsWithOtherPhone, legalExistsAsIndividual, INVALID_COMPANY. (Company OTP steps commented out.)
"moadian" variants of Individual/Legal forms (Iran tax system «سامانه مودیان» data). Hooks: useFetchCustomerByNationalCode, useGetBusinessFields (industry), useSendLetterheadVerification, useSendOffline, useGetEContract/useSignEContract, useCampaign.
## Credit activation flow (Profile/components/credit/activiation)
request-step: RequestCredit → Pending (spinner) → ScoreReviewResponse (credit scoring) → AcceptedResponse | RejectedResponse | Error
upload-cheque-step: UploadCheque (+ guideline modal) → Pending
physical-cheque-step: Review → Rejected (deliver physical Sayadi cheque)
Then: CreditBanner, CreditStatus, deactive state, installments tables (Today / Future / Paid + PayButton), receipt.
## Wallet cash-in: AmountStep → BankSelection (desktop/mobile) → BankWithPayID (identified deposit, PayIdInfoBox) | BankWithoutPayId (upload receipt) | NoAvailableMethod; transactions list; receipt.
## Orders UI parts: OrdersList, order-item, order-detail {OrderBadge, OrderItemsTable, OrderNote, OrderProductItem, OrderShipmentsExpired, OrderShippingPackage, HistoryShippingPackage, OrderTimeNote, order-progress, product-carousel}, invoice, pre-invoice.
Personal info: IndividualInfo, LegalInfo, EconomicInfo, NotRegisteredInfo; Contract (main/Contract.tsx); authorization-notice.
## RFQ UI: RFQList, RFQDetailModal, single-rfq table, single-rfq-item-detail {QuoteMessage, ApprovedNotice, RejectedNotice}.
## Shared B2E components (custom, many legacy SCSS): ProductModal (variant/bundle modal, TaxBox, QuantityComponent, LoggedOutFooter), BasketGrid/ListItem, CartDrawer, address (list modal, map location chooser, details), amazing-mini-carousel, ranked-carousel, confirm-modal, currency-input, drop-down, empty, expandableBox, faq, feature-flag, horizontal-stepper, info-box, otp-ttl, pagination, selector-menu, slider, snackbar, svg-sprite, tab, upload-field, Hint(+story), VerticalLogo.
Header: search (modal, history, keyword chips, product carousel), RfqButton, mini-profile, categories-menu, mega-menu (desktop/mobile, categoryIcons), useCheckMinimumOrder (minimum order amount rule!). Footer: legacy DK footer parts (app install, newsletter, partners, badges, social, about).
# Confluence — space B2BTP "B2B Tech & Product", section Teams > B2E-Platform (page 175881100). Read 2026-10-19.
Structure (team template, generated 2026-06-08): Overview, Product Docs, Business Docs, Design & Research Docs (EMPTY), Tech Docs, Metrics & KPIs (EMPTY), Jira & Delivery (EMPTY), Meetings (EMPTY), Links (EMPTY).
Content pages:
- Product Docs > «1405/04/16-Baseline Requirements Table» (xlsx attachment: base requirements table for B2E)
- PRDs (author Mohammadmahdi Hojjat): «پرتال شاد» (1405/06/03), «پلتفرم خرید کارکنان سازمانی بانک مرکزی» (1405/05/26), «پلتفرم خرید کارکنان سازمانی کمیته امداد / مهراد» (1405/05/11). PRD template: author, date, requester, links, status, stakeholders, Problem Definition, Supportive Data, Metrics & Goals (KR/HM, baseline, target, timeframe), Suggested Solutions, Final Solution.
- Product Analysis: «گزارش جامع تحلیل پتانسیل کاربران B2E و استراتژی Assortment نسخه اولیه» (31.9K chars)
- Business Docs > BRD template; Strategy > «Business and Product Startegy» (116K chars, خرداد ۱۴۰۵) and «Portal Domain and Proposal» (38.5K chars)
- Tech Docs: Diagnostic Queries (product import per channel, e.g. channel b2e_shad id 16; SKU = DKPC-<variant_id>), Discovery: Cross-Dock & SBS support; Migrating channel category mgmt to category_tree; «Order Status: draft vs wait_payment» (2026-10-18); Error Log Reports (multi-payment/create); Feasibility Check; Test & QA > Bank Markazi.

## Key facts extracted
### B2E strategy (خرداد ۱۴۰۵)
- B2E = digitize & control companies' internal procurement. Interviews: orgs need official invoice, proforma, assortment, competitive price, bulk buying, purchase credit, internal control, reliable delivery, financial reporting.
- Main DK site strengths for legal customers: valid official invoice, assortment, brand trust, payment security. DKB (Digikala Business) has NOT yet created clear advantage vs buying as legal entity on main site.
- Churn / non-reuse reasons: limited assortment, manual process, uncompetitive prices, WEAK UX, delivery limits, no differentiated value proposition.
- Structural blockers: no independent growth engine (ownership/team/KPI/investment); dependent on DK Core supply/ops/finance/logistics; infra decision postponed; supply model unclear.
- Decision: B2E must move from a low-priority complementary sales line to a product-led ORGANIZATIONAL PROCUREMENT PLATFORM: company account, user identity, purchase process, stable supply, org pricing, official invoice, credit, reliable delivery, repeat purchase.
- Key decisions: product must understand company structure, users, ROLES, credit, catalog, price, reports. Focus on pains main site doesn't solve: bulk, volume pricing, proforma, credit payment, purchase caps, roles, financial reports, org delivery. Opportunity mostly in frequent consumables, office, digital, welfare, periodic purchases; tiered/volume discount decisive.
- Required capabilities: Company Account, Role & Permission (requester, buyer, approver, finance, admin), per-user purchase caps, Admin Console / Admin Panel, Catalog Scale, Automated Pricing, Credit Control (per company/unit/buyer). Logistics/delivery quality = strategic pillar (biggest trust breaker in interviews).
- Target first: SMEs, digital-ready companies, current DKB customers, medium-complexity orgs; big Enterprises later.
- North Star: Repeat Organizational GMV.
### Portal domain («پلتفرم خرید کارکنان سازمان», proposal)
- Portal lets an organization make a CONTROLLED set of DK products purchasable for its staff/target community, with access rules & entitlement (budget/credit) approved by the org. Delivered via API inside org's platform OR a standard dedicated storefront by DKB. Base price = DK base price; org differences via discount, cashback, assortment, spend cap, quantity caps. Credit ownership/risk/settlement stays with org/user/financier. Portal owns catalog layer, purchase rules, order orchestration, delivery (to individual address or org hub). Supply from retail + marketplace.
- Domain boundaries: full DK catalog → main Digikala; multi-service welfare/travel/finance → Digipay; org buying for its own needs → B2E; controlled staff spending on limited goods with defined funding → Portal (DKB).
- Customization: branding + limited dedicated development (not full white-label super-app).
### Portal PRDs
- Shad (student/teen app, 30M MAU): restricted agreed catalog (max 20K live SKUs), Back-to-School campaign 15 Shahrivar–15 Mehr, IPG + DKB wallet only, own visual identity (colors/logo/banners), delivery from Danesh/Badamak/Shadabad warehouses, B2B order flow, no SBS. KR: funnel conversion 0.3%, 15,000 orders/month.
- Central Bank (بانک مرکزی) staff: welfare budget 20M Toman × 10,000 staff, charged to Digipay wallet; only DF FMCG supply categories purchasable. (vertical cbi / cbint)
- Komiteh Emdad via Mehrad super-app: ~100K beneficiaries (1,000 pilot), Mehrad wallet credit spent on curated catalog; replaces current whitelisted landing (digikala.com/org-exclusive) doing ~4,000 orders/month (~400B Toman), avg 5 items/order. SSO with Mehrad.
### B2E user tiers (Product Analysis): Tier A strong signal (≥2 sent orders + strong bulk/high-value), Tier B main candidate, Tier C weak/needs review. Amounts in Rial (÷10 = Toman). Use: A→direct sales/seed accounts/credit; B→activation, campaigns, assortment; C→lead enrichment.
### Tech facts relevant to design
- Platform channels in Bagisto (b2e, b2e_shad, ...); per-channel category tree (subcategory can be root in B2E; per-channel order/visibility).
- Supply types: DK warehouse, B2B marketplace seller (shadow seller, cross-dock), semi-marketplace; SBS (ship-by-seller) NOT end-to-end supported → affects "ارسال فروشنده" shipments & lead times.
- Order status draft vs wait_payment (Supernova OMC): draft only while building (admin/offline orders); wait_payment = submitted, money missing; B2B "not paid" SMS for online orders > 500M; credit_b2b is a COD-like method that can auto-confirm.
# B2E Strategy doc — deep extract (Confluence page 180773622 «Business and Product Startegy», خرداد ۱۴۰۵). Chars 0–45000.
## North Star: Repeat Organizational GMV, with guardrails: repeat-purchase rate, invoice accuracy, delivery SLA, share of automated pricing, credit risk.
## Problem statement
How can DKB turn internal org purchasing from scattered, manual, offline, opaque, person-dependent, costly → online, controlled, credit-based, reportable, with official invoice, reliable — so the org manages purchases/costs better and DKB builds recurring, scalable, defensible revenue.
Today: units announce needs by message/call/informal request/Excel; buyer gets quotes from several suppliers; petty-cash holder or finance pays; invoices & receipts collected via different paths; org lacks visibility on cost, consumption, supplier, quality, budget deviation.
## Market categories → product implications
- Frequent consumables (tea, sugar, water, detergent, tissues, hospitality) → volume pricing, tiered discount, periodic ordering, stable supply.
- Office supplies (paper, stationery, cartridges) → Saved List, Reorder, unit budgets, cost reports.
- Digital & equipment (laptop, monitor, mobile, printer) → proforma, approval, warranty, QC, comparable price.
- Welfare & occasion gifts (gift card, occasion packs) → bulk order, delivery scheduling, unit reporting.
- Project purchases (office fit-out, branch setup, multi-item) → light RFQ, proforma, split shipment, account management.
## Segments (priority order)
SMEs (best start; fast decisions; need simplicity, official invoice, fair price) → Tech companies/startups (pilot for roles, reports, saved lists, credit MVP; high UX expectations) → large private companies (proforma, approval, credit, caps, reports; after foundation) → education/medical centers → factories/production (MRO depth, RFQ) → government/semi-gov (later; heavy compliance) → service/retail businesses.
## Actors / stakeholders (ROLES for design)
- Internal requester «درخواست‌دهنده داخلی» (admin, HR, IT, ops, sales, branch staff)
- Purchasing officer «مسئول خرید» — finds items, gets prices, places & tracks orders
- Petty-cash holder «تنخواه‌دار» — small/urgent purchases, records expense, delivers documents to finance
- Office/Admin manager «مدیر اداری / Office Manager» — consumables, office upkeep, stock of org items
- Finance & accounting «مالی و حسابداری» — invoice control, tax, documents, reconciliation, payment, settlement, expense reports
- Unit manager / Approver «مدیر واحد» — approves by budget, necessity, policy
- Org admin on platform «ادمین سازمان» — account settings, roles, permissions, purchase caps, addresses, users
- Internal DKB: B2E sales team, ops & logistics team, B2E finance team.
## Personas (JTBD / pains / expectations)
- Purchasing officer: find items at good price & reliable supply | manual inquiry, hard comparison, shipment follow-up, stock uncertainty | fast search, org price, purchase list, order status, fast support.
- Petty-cash holder: quick controlled buys with presentable document | collecting receipts, payment limits, mismatch with finance, no report | varied payment, downloadable invoice, purchase report, easy settlement.
- Finance/accounting: cost control, valid invoice, compliance, reportability | incomplete invoice, scattered docs, mismatches, no cost coding | official invoice, expense report, Excel export, payment confirmation, reconciliation.
- Office manager: continuous supply, avoid shortages | irregular stock, last-minute buys, uncertain quality | recurring purchase, suggested stock, purchase plan, one-stop supply.
- CEO/owner of SME: cut costs, remove personal involvement in small buys | person-dependency, uncertain price, time | simple buying, transparent price, official invoice, tiered discount.
## UX research (آذر ۱۴۰۴): 10 in-person semi-structured interviews with legal customers who bought from DK (most also used DKB before and churned back to main site). Participants: Pasargad Insurance (1400+ staff), Sorena Latif Dariush (supplies, 5–10), Persh education (500+), Chista publishing (30–40), Sina Pakhsh Gen (pharma distribution, 100+), Noor Basir lab (200+), Faramehr Alborz (auto parts, 12), Dadehkavan Amirkabir/Boghrat (software, 40), Shatel (telecom, 600+), Tosan Negin (banking infra, 100+).
Purchase patterns: Large org = internal unit need → multiple proformas → finance/audit/management approval → payment on schedule → delivery & document registration (needs proforma, approval, roles, caps, finance reports, credit, delivery tracking). Small/medium = buyer/manager/CEO identifies need, fast purchase via petty cash or company card (needs speed, official invoice, trustworthy price, reorder, simple payment). Bulk frequent items bought from factories/distributors for price. Varied/hard-to-find items: DK used for search & urgent needs.
Findings about Digikala (main site): official invoice = #1 reason (accept small price diff for it) → invoice & proforma must be base capability; assortment = first search reference; brand trust eases internal approval; convenience; LOGISTICS pain (delays, missed windows, poor packaging, no coordination) → delivery reliability as pillar; quantity caps block bulk → support bulk & qty negotiation; no tiered discount; cash payment & IBAN verification slow for large sums → credit/payment terms; invoice not corrected after partial return/cancel → invoice correction & reconciliation.
Findings about DKB specifically: no perceived advantage vs main site; limited assortment; MANUAL process (calling account manager, sending DKP codes) slow; some prices higher than main site; delivery requiring national ID card / CEO's name = bad experience → company delivery profile & authorized receivers; previous platform UX described weak & immature → redesigned UX based on org purchasing roles.
## Jobs-to-be-Done
1 Frequent org purchases → fixed list, good price, reliable delivery, correct invoice (Saved List, Reorder, Volume Pricing, SLA, Invoice)
2 High-value purchase → proforma, internal approval, pay per finance routine (Proforma, Approval, Payment Terms, Credit)
3 Several people buy → role, cap, access per person (Company Account, Role, Permission, User Limits)
4 Bulk consumables → wholesale price & stable supply without negotiating with distributor (Contract Pricing, Supplier Sourcing, Bulk Order)
5 Delivery → time, authorized receiver, packaging quality, tracking (Delivery SLA, Authorized Receiver, Tracking, Support)
6 Partial return/cancel → invoice, payment, refund corrected without mismatch (Reconciliation, Invoice Correction, Refund Workflow)
## Demand data: Legal Tier A 691 users / 16,568 orders / 656B Toman in 3 months; Tier B 2,738 users / 41,418 orders / 991B Toman (≈330B/month) → main activation base; Tier C 7,184 users. Hidden market (all users): Tier A 3,682, B 21,654, C 87,983. Marketplace = ~70% of items; Retail = 50–66% of value → hybrid supply needed. Demand spans 19 root categories, 1,146+ categories, 12K products.
## Catalog strategy: Core Phase 1 = 25 categories, ~1,010 curated variants; High-value Controlled = 9 categories ~180 variants (mobile, laptop, monitor, appliances) with approval/caps/credit control; Gold/Silver Benefit vertical (separate, gift/HR benefit); Target state = full-selection DK catalog, governed.
## Priority categories: office consumables (very high frequency), office supplies, digital equipment (high value, warranty, invoice), general org equipment (chairs, desks), corporate gifts (seasonal), light operational items.
## Market sizing: TAM 450–800K B Toman/yr (base); SAM 80–150K B; Operating SOM year 1 ≈ 0.4–1.2 همت (10–30% capture of Legal Tier B).
## Benchmarks: Amazon Business, Alibaba, Udaan, Staples Business Advantage, Grainger, SAP Ariba, Coupa, Procurify, Spendesk, Odoo, Ramp. Lessons: business account, org pricing, approval, spend visibility; RFQ & supplier verification; KYC + credit + fast delivery for SMEs; office supplies as retention pillar with account tools (unlimited users, multiple ship-to, custom pricing, payment terms, approval routing).

## Strategy doc chars 50K–92K
### Capability gaps (severity)
Critical: Company & surrounding users; Role & Permission; scalable full-selection-ready catalog architecture; credit purchasing & buyer credit limit (critical for scale). High: manual live / no catalog ingestion-governance (critical for scale); demand qualification; manual B2E pricing; stable/scalable supply (scale-critical); org delivery & logistics coordination; no systematic invoice correction/reconciliation.
### Principle: FOUNDATION BEFORE EXPANSION.
### Gap → capability matrix
proforma & internal approval → Proforma, Purchase Request, Approval Flow, PO-lite | bulk & qty cap → Bulk Order, Quantity Request, Volume Pricing | price/tiered discount → Automated/Segment/Contract Pricing | cash payment, no credit → Credit Wallet, Payment Terms, Cheque/Transfer workflow | unreliable logistics → Delivery SLA, Scheduled Delivery, Authorized Receiver, Delivery Support | invoice mismatch → Invoice Correction, Reconciliation, Refund Workflow | manual account-manager process → Self-service Admin, Bulk Operations, Digital Catalog Request.
### SWOT highlights: Strengths = DK brand, official invoice, assortment, payment trust, data/tech, field team, big base of org users. Weaknesses = no clear B2E advantage, limited assortment, manual processes, uncompetitive prices, no Company/User/Role, no credit, manual pricing & live, weak org logistics, no independent growth engine. Threats = traditional suppliers w/ credit, factories/distributors, main DK site, logistics distrust, org resistance to change.
### Macro segments (by HOW they buy): A centralized low-complexity (SMEs, startups, small services) — priority 1 (score 35); B structured multi-role (mid/large private, banks/insurers, private health/edu chains) — priority 2 (30); C complex institutional/operational (gov, holdings, big banks, hospitals, factories) — priority 3 (27).
### GTM phases: Pilot (5–10 customers; test Company Account, invoice, catalog, SLA) → Early Adopter (tech companies, existing DKB customers; test Role/Permission, reports, org pricing) → Expansion (mid orgs; Credit, Volume Pricing, Reorder) → Enterprise (Approval, Budget, PO, Contract Pricing, dedicated account mgmt).
### Revenue layers: retail margin/marketplace take rate (now) → contract/volume pricing, RFQ/sourcing fee, service fee (phase 2) → credit revenue (3) → procurement SaaS layer, sponsored placement (4) → ads (5).
### 1404 performance: B2E 1.8 همت NMV, 114B Toman GM, 12.7% of B2B lines — but driven by offline sales, account managers, manual negotiation. 1405 direction: online behavior, new B2E platform, organic growth.
### Vision: become the main online org-procurement infrastructure for Iranian businesses. Mission: make org purchasing simple, transparent, manageable, reliable.
### Positioning — B2E IS: org procurement infrastructure; cost/credit/access/invoice/report control layer; account-based & company-based; digital path for purchase, proforma, approval, org payment; repeat-purchase platform with org catalog & contract pricing. B2E is NOT: just an online shop with an org name; a discount channel; user-based like personal shopping; a manual process via account managers; a limited showcase priced above main site.
### Competitive stance: "controllable org purchasing with Digikala's assortment and digital simplicity".
### Supply: phased & multi-source — Core selection + capacity share → dedicated supply for proven repeat categories → marketplace flow for long-tail → RFQ/quote-based for project/off-catalog.
### Pricing: "Trust-based Competitive Pricing": price parity/controlled variance vs main site; segment-based org pricing; repeat/saved-list pricing; volume discount/quantity breaks; contract pricing w/ validity; quote-based (RFQ); service-adjusted transparent fees (credit, SLA). Needs price comparison/audit, margin guardrails.
### Product vision: trusted reference for org purchasing in Iran. Product mission: simplify & empower internal org purchasing — faster, cheaper, more confidently source, manage, track.
### First 6–9 months focus: Company/User/Role foundation; stable catalog + automated pricing + live automation; proforma & reconciliation; credit & user-level purchase limits; delivery SLA & authorized receiver; admin console & gradual self-service. NOT: side features, unplanned category growth, sales growth without financial pains solved, credit without risk control, generic delivery, manual Excel customer mgmt.
### Pillars (maturity target in 18 months): Organization Account & Identity (Core Foundation); Role, Permission & Purchase Authority (Core); B2E Admin & Governance Console (Core); Scalable Catalog & Product Living (Core); Automated Pricing Engine (Core); Financial & Invoice Layer (Core) ... (rest below)

## Strategy doc chars 92K–end
Pillars (cont.): Sustainable Supply (Controlled MVP→Core for scale); Credit, Budget & Limit Control (Controlled MVP); Delivery Reliability & Org Fulfillment (Controlled MVP); Procurement Workflow & Approval (Controlled MVP/Growth); Repeat Purchase & Planned Procurement (Growth: saved lists, reorder, recurring order, subscription basket, demand planning); Spend Visibility & Analytics (Growth: dashboard by company/unit/user/category, budget burn, savings, spend history).
Pillar capabilities: Org Account (company profile, user invitation, account hierarchy, multi-branch, link order/invoice/credit to company); Role & Authority (Requester, Buyer, Approver, Finance, Admin; purchase cap; category access; payment-method restriction); Admin Console (user mgmt, role setup, segment mgmt, audit log, bulk ops, account status); Catalog (bulk/auto live, rules, SKU health, rollback); Pricing (rule-based, segment, volume, guardrail, audit, manual override); Financial (proforma, official invoice, invoice correction, refund/reconciliation, accounting export); Credit (company credit, user limit, payment terms, budget allocation, risk rules, credit usage report); Delivery (SLA, scheduled, authorized receiver, heavy/bulk, tracking, support); Workflow (purchase request, approval flow, cost center, delegation, exceptions).
Capability map maturity: Account (Company/User/Role → multi-branch/hierarchy → Enterprise SSO/API); Governance (permission/limit → approval/PO/audit log → policy engine/delegation); Catalog (bulk live → segment/private catalog → dynamic procurement catalog); Pricing; Supply; Credit (company credit/user limit → budget allocation/payment terms → risk-based dynamic limit); Financial (invoice/proforma/correction → cost center/accounting export → ERP integration); Delivery (SLA/tracking/authorized receiver → bulk/scheduled/split → multi-location); Analytics (order report/spend dashboard → savings/category insights → predictive demand/recommendation).
AI usage per pillar: smart company data completion & doc validation; role/limit suggestions; account activity summaries & anomaly alerts; SKU health; demand forecast & supplier suggestion; price suggestions & non-competitive price alerts; credit pre-check & invoice/payment matching; delay prediction & escalation; smart reorder, periodic need prediction, spend insights. Phased: internal productivity first → catalog/price/supply decision support → customer-facing (smart reorder, suggested purchase, spend insight).
Roadmap phases: 0 Org Account & User mgmt → 1 Catalog Scale & Product Automation → 2 Role & Permission → 3 Pricing & Bulk Procurement → 4 Financial & Credit → 5 Delivery Reliability & Workflow → 6 Supply → 7 Analytics, Repeat & Integration.
18-month plan: M1 governance & infra decision; M1–3 Company Account, User Mgmt, Role/Permission MVP, Admin v1, pilot 5–10 customers; M2–6 catalog scale; M5–6 pricing engine MVP; M6–8 supply readiness + RFQ-lite; M7–9 credit MVP + company/user limits; M9–10 invoice correction/reconciliation; M9–11 delivery SLA/authorized receiver/scheduled; M11–13 approval-lite, purchase request, cost center; M13–15 saved list, reorder, recurring basket, spend dashboard; M15–18 enterprise readiness gate.
Strategic blockers: (1) no independent growth engine; (2) B2B/Core alignment; (3) PLATFORM INFRA DEBT — Bagisto fine for CE, but B2E users behave like Digikala.com users (discovery, assortment, trust, ratings, reviews, comments, depth) → decision: continue Bagisto vs move closer to Digikala.com infra vs hybrid = gate of phase 0; (4) supply share.
KPIs: North Star "Recurring Governed Organizational GMV"; Active Companies; Multi-user Company Rate; Live SKU Capacity; Product Live Automation Rate; Automated Pricing Coverage; Volume Price Adoption; Proforma Usage Rate; Invoice Accuracy Rate; Credit GMV Share; Overdue Rate; On-time Organizational Delivery Rate; Repeat Purchase Rate; Manual Ops per Order.
Open decisions: depth of Company/User/Role MVP; proforma & approval in MVP or later; credit company-level vs user-level first; minimum stable SKU capacity; which categories get auto-pricing first; which orders need dedicated SLA & authorized receiver; Admin panel internal-only vs partly org self-service.
