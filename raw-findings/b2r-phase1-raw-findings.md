# B2R raw notes (2026-10-19)
## Live https://b2b.digikala.com (logged out)
Next.js; html no tenant class -> ui-kit default theme: primary oklch(0.3428 0.1138 257.82) ≈ navy #093672; background white; IRANYekanX; RTL. shadcn data-slots (accordion, button ×99, carousel).
Header: logo «دیجی‌کالابیزینس» (navy), «دسته‌بندی‌ها» menu, search «جستجو در دیجی‌کالا بیزینس», «ورود / ثبت‌نام», cart. Mobile bottom nav: خانه, دسته‌بندی‌ها, سبد خرید, سفارش‌ها, حساب کاربری.
Home (logged out): category grid (موبایل /products/3, لپ تاپ 5, هدفون 7, کنسول بازی 8, هارد و SSD 10, تبلت 4, ساعت هوشمند 9, پرینتر 6, اسپیکر 12, پاور بانک 13, مانیتور 14, شارژر 531, قطعات 17, فلش مموری 24, کامپیوتر همه کاره 25, تجهیزات شبکه 27, «مشاهده همه» /categories); hero slider incl. «بیزینس کلاب» loyalty (diamond, "با هر خرید کسب امتیاز...") -> /club; side promo «1% همین حالا ثبت‌نام کن و تخفیف بگیر!» + «ثبت نام»; USP row (سفارش ... تعداد عمده, ارسال رایگان و سریع, روش‌های متنوع پرداخت, قیمت‌گذاری به نرخ همکار?); carousels «سور پرایس» (orange themed band), «سودِ اخرِ ماه IT»; FAQ; footer.
Carousel routes /carousel/{id}?category=.
PLP /products/3 (موبایل): breadcrumb «دیجی‌کالا بیزینس/ موبایل»; brand chips row with logos (سامسونگ, شیائومی, اپل, نوکیا, ریلمی, وکال, جی ال ایکس, جنرال لوکس, ...); delivery banner «تحویل امروز برای تهران و البرز / تحویل فردا برای سایر مراکز استان‌ها» + «رایگان»; filters (قیمت, برند, رنگ, حافظه داخلی, ویژگی‌های خاص, حداکثر ظرفیت کارت حافظه, مقدار RAM); sort «مرتب سازی:» پرفروش‌ترین | گران‌ترین | ارزان‌ترین; horizontal product rows: image, title, color dots, price (Toman icon), discount %, «انتخاب رنگ» dropdown (variant pick); in-list carousel «خوش قیمت های موبایل» (variant cards with color + guarantee e.g. «گارانتی 18 ماهه شرکتی», «هما تلکام»).
Catalog = consumer electronics (mobile 77% of sales per Confluence).
## Figma
CE - Homepage V2 (tOgOKXY5k9UOuSTl1e0y2I) pages: Exploration, UI Design V2.0, Components, Critical Alert, 📱 UI, Redesign Ideation, Visual Design, 🔨 Exploration, Showcase, 🗄️ Archive, Cover, Usability test, Draft.
 UI Design V2.0: Homepage desktop 1440 + mobile 360 (Not logged in, Logged in), guest types 1/2, left-widget states (not logged in / logged in no order / registered / unregistered), herosection-desktop, last-purchase-carousel (desktop/mobile), product-card [last purchase], HomePage [Promoters] section (desktop/mobile, see-more, all types), Promoter cards/subtitle/category, Product list, Promoters section, Drawer content, Show more.
Cart, Checkout & Order History (0WGNUxcG6vsHYja8MXsbhp) pages: Basket, Cart, Checkout - Multi shipment, Checkout - Payment, Rescheduling, Digipay credit payment, Wallet top-up, Orders Page and Detail, Wireframes, Prototype, Local components, Hybrid payment B2E {Temporary}, Hybrid payment B2B, UI Check, Draft.
PLP V2 (IUEquAFnRC7yCUX3zoMkXV): Cover, Comps, Exploration (PLP mobile ×5, RFQ submitted, PLP V2 Desktop, Delivery Banner, Filter & Sort Row, DKP Card, RFQ Modal, DKPC Modal for Best sellings, DKP Card - Quantity Selector), Handoff (empty), Design Check, Archive.
## Confluence (B2BTP > Teams > CE-Platform 175881110) — team now also called "B2R Platform"
PRDs by Tina Kahrizi (PM): B2B User Operation new (registration w/ Supernova B2B account sync: unique mobile + national ID; individual: mobile, national ID, birth date; legal: representative then company national ID, official gazette «روزنامه رسمی», documents); Cross-selling (mobile = 77% sales, accessory 8%, IT 15%; accessory recommender phase 1); E-Contract (read & accept contract before ordering / credit; log acceptance; expiry; PDF; gate checkout & credit); FieldOps activation enablers (field agents visit shops: visit types registration/activation/repurchase; 4,790 monthly registrations via field app, 920 first purchases, 20% activation, median 23 days to first purchase); Field call plan + legal registration in field (6 مهر ۱۴۰۵); Search Enhancement (typo/transliteration/word order tolerance); سرویس POS طلا (gold POS for shops, in progress); فروش غیررسمی (informal accessory sales via selected suppliers, DK not seller, QC + logistics); لاجیک‌های اتوماتیک ریکامندیشن (home carousels automatic: user behaviour + weekly top demand); نمایش خریدهای قبلی (last purchases on home: 70% drop in home/PLP discovery; 65.7% users >1 order; 70% of DKPs bought are repeats; 68% GMV from repeat DKPs); هوم پیج داینامیک (admin reorders home sections; fixed: header, category, FAQ, footer, loyalty widget; dynamic: value proposition, carousels, basket section, best sellers); Segment based & time bound carousels (platform CR ≈10%, segmented campaigns up to 3×); پروموترهای داینامیک هوم پیج (one promoter section; ~20% sessions interact with home; engaged users 26.31% purchase vs 3.67%).
Research: تحلیل اکتیویشن (20,931 registered, 2,017 activated → 9.64%; 70% drop after registration; 2% buy same session; 73% of activated buy in first 2 weeks; golden window first 24h; eligibility/KYC blocks part of users; new users ATC 30% vs 13% but CR 7.69% vs 4.5%); loyalty research (excel link); final activation research (pptx).
Strategy: B2B Product Platform Strategy (1405, draft): CE was the first specialized store (B2B electronics to retailers/shops/guilds); after ~2 yrs, no evidence that separate specialized stores raise trust/conversion; many platforms split capacity; CE and B2E share DB & infra; Gold has separate platform; Construction greenfield; proposal → Federated B2B Platform: shared core (product, commerce, financial services) + per-buyer experience/policy/extensions. Deep B2B features named: MOQ, Bulk Pricing, Reorder, Loyalty, Credit, X-sell.
CE Revolving Credit Strategy (1405/06/09): credit as short-term working capital for real guilds; demand-linked, business-verified, behaviour-managed, liquidity-constrained; 6-month forecast 1,058 first credit buyers, 435.31B Toman booked NMV; whitelist rollout.
Revolving Credit PRD Phase 1 (2026-10-17): whitelist / all toggle; individual bank scoring via OTP; legal via national ID; repay installment by bank transfer (user) and wallet/transfer (admin); Parsian terminal; credit T&C at request. Phases 2, 3 exist.
CE Purchase Demand Evidence: 1,408 CE standard customers; purchase gate GMV ≥ 80M in 3 months → 62.5% customers, 97.8% GMV; 7-day revolving credit line.

## Confluence deep reads (2026-10-19)
### Activation analysis (180767803)
- 20,931 registered; 2,017 activated → 9.64% overall; ~10% last 2 months.
- Almost all do first browse; 30% add to cart same session; 70% churn after registration; 2% buy on day 1.
- 73% of activated buy within first 2 weeks. Cumulative 60d activation: 1d 2.87%, 1w 4.49%, 2w 5.76%, 4w 7.16%, total 7.87%. Golden window = first 2 weeks, esp. first 24h.
- ATC: new 30% vs old 13%; CR new 7.69%?/4.5% (table ambiguous). U-shaped ATC by registration age (44.3% / 38.4% / 35.6% / 46.7%).
- Segments for non-buyers: a) Potential (carted, no purchase) b) Engaged no purchase c) Not engaged.
- Cart: ~50% drop before shipping. From cart → home 54%, profile 4.3% (7x old users), auth/login 1.9% (2x). Profile visits = club (14%) or personal info to upload business licence (جواز کسب) (23%).
- KYC blockers: legal (حقوقی) pending → fully blocked at cart; legal unregistered → sent back to auth pages; avg 31h document approval. General customer group → blocked and sent to personal-info to upload business licence. 97% of customers are natural persons (حقیقی). Users stay in "General" customer group until telesales verification. ASP ≈ 21M toman.
- Hypothesis: cart page design easy to close; doesn't guide to next step.
- Only 5% of new users hit stock error at cart.
- Shipping: new registrants 24.2% purchase vs others 77.7%. Add-address modal 36.6% vs 5.8% (6.3x); edit address 2x; back nav 18%.
- Payment: React JS error; wallet top-up confusion (13 of 77 went to wallet, ~half dropped, 1 bought). Old users: wallet→payment return 80%.
- Segment B engagement events: products_pageview, filter_brand_row, view_basket, category_click, search, use_sort, sidebar_filter, basket_view_all, best_selling_view_all → first action is discovering products & prices, filter by brand.

### B2B Product Platform Strategy (180774752) – Draft
- CE = first specialist store: B2B electronics to retailers/shops/guilds (اصناف).
- CE & B2E share DB and tech infra; financial services usable on both; but behaviour hard-coded, not configurable per business (e.g., payment method order same on CE and B2E).
- CE payment priorities (maybe): Credit, Cheque, Bank transfer, Wallet, Hybrid. B2E: Org balance, employer budget, pay by invoice, bank transfer, personal.
- Gold: separate platform+DB. Construction: no platform (greenfield): shared-core-first, specialized-journey-by-design (RFQ, PO, partial delivery, milestone settlement).
- Under-developed B2B depth: MOQ, Bulk pricing, Reorder, Loyalty, Credit, X-sell.
- Customer value: price & stock, fast find, MOQ & bulk pricing, fast reorder, credit & payment, invoice & docs, reliable delivery, support/post-purchase.
- Options A (independent shops), B (single general store), C (Federated) → Recommend C as target hypothesis to validate.
- Model: One Business Identity + Shared Commerce & Financial Core + Retailer Commerce Mode (CE/other retail) + Organizational Procurement Mode (B2E) + Vertical extensions. Core: Identity, Catalog, Search, Cart, Order, Payment, Credit, Invoice, Delivery, Refund, Support, Data.

## Code: apps/website (B2R) — read-only GitLab, develop branch (2026-10-19)
Modules: Basket, Campaign, Carousels, Category, Checkout, Credit, DropShip, Home, KomitehEmdad, Landing, Loyalty, NewHome, PDP, Products, Profile, RFQ, StaticPages, UI, User, shared. 1,293 files.
Routes (Next app router): / ; /login ; /products/[[...category]] ; /products/special ; /plp/[id] ; /pdp/[id] ; /search ; /categories ; /categories/selection ; /basket (bundles «سبد») ; /carousel/[id] ; /campaign ; /campaign/discount ; /landing/gold-ce ; /landing/hot-summer ; /komiteh-emdad ; /club ; /loyalty ; /credit ; /rfq ;
checkout: /checkout/cart (also /?cart=true drawer), /shipping, /payment/[[slug]], /payment/digipay-gateway, /digipay-thank-you, /preinvoice, /repayment, /thank-you ;
profile: /profile (خلاصه فعالیت‌ها), orders, orders/[slug], orders/[slug]/invoice, cheques, cheques/[slug], cheques/[slug]/extend, transaction, rfq, rfq/[quote], addresses, personal-info, api-management, club, credit, credit/receipt, credit/eghtesad-novin(/status), wallet/[slug], wallet/receipt ;
drop-ship mirror: /drop-ship (+products, search, categories, rfq, checkout/*, profile/installments, orders, rfq, addresses, personal-info) ; static: /page/terms, privacy, contract, terms-and-condition ; /ui.
Profile menu: خلاصه فعالیت‌ها, سفارش‌های من, مدیریت چک ها, تاریخچه تراکنش‌ها, درخواست‌های خرید, آدرس‌ها, اطلاعات کاربر, مدیریت API.
Drop-ship profile menu: خلاصه فعالیت‌ها, فروش اقساطی, سفارش‌های فروش اقساطی, درخواست‌های خرید, آدرس‌ها, اطلاعات کاربر.

### Status dictionaries
- Order (backend comment: pending, pending_payment, processing, completed, canceled, closed, fraud). Tabs: همه / در حال بررسی(pending) / در حال انجام(processing) / تحویل شده(completed) / لغو شده(canceled). NewHome orders widget uses: سفارش جاری(ongoing), در حال انجام, تحویل شده, لغو شده — different set & colors (kit-* tokens + hex) → drift.
- Cheque: درحال بررسی(default) / در انتظار تحویل چک(approved) / در انتظار سررسید(physical_received) / پردازش بانکی(deposited) / پاس شده(passed) / رد شده(rejected,returned) / برگشت خورده(bounced). Colours mix uiKit tokens and raw hex #FEF2F2/#B91C1C.
- Doc (KYC docs): pending درحال بررسی / verified تایید شده / rejected تایید نشده.
- Credit wallet: suspended "مسدود" ; hasCredit & no status "بسته شده". Credit repayment tabs: سررسید‌های امروز / سررسید‌های آینده / پرداخت شده. RETRY_DISCARDED_DAY_LIMIT 14.
- Eghtesad Novin bank credit request: success / failure.
- RFQ request: New جدید / Pending در حال بررسی / Confirmed پایان یافته. Quote: New پیشنهاد جدید / Answered پیام‌های فروشنده / Pending پیام‌های من / Approved تایید شده / Rejected رد شده.
- Transaction filters: all, charges افزایش موجودی, refunds بازگشت وجه, cashouts برداشت موجودی, orders خرید کالا, installments پرداخت اقساط. Status accepted موفق/pending/rejected ناموفق.
- Loyalty reward: available, redeemed, used, expired, rejected, pending.
- Cart errors: out-of-stock, cart-error, inactive.
- Register errors: individual-exists-with-another-login-phone, individual-exists-as-legal, legal-exists-..., legal-exists-as-individual, invalid-company.
- Bundle labels (NewHome): تمام شد / به‌صرفه‌ترین سبد امروز / تنها در این سبد / پرفروش‌ترین سبد امروز.

### Payment methods (B2R checkout)
credit «پرداخت از طریق اعتبار دیجی‌کالا بیزینس», wallet, ipg (SEP) & ipg-parsian (cap 200,000,000 toman per IPG), bankcheque «چک مدت دار», sheba, accountnumber, cheque «چک بانکی مدت دار». Transaction titles also list digipay_bnpl, digipay_credit, digipay_wallet, egift, ipg-top, mehrad-wallet. Drop-ship adds egift as «اعتبار».
Delivery methods: jet, normal, post.
Core config: minimum order amount (sales.order_settings.minimum_order).

### Account types (registration)
حساب حقیقی «صدور فاکتور رسمی به نام شخص حقیقی» badge «مناسب اشخاص و فروشگاه‌ها»; حساب حقوقی «...به نام شرکت» badge «مناسب شرکت‌ها».

### Credit (B2R)
- isCreditDeactive = true (credit landing currently flagged off).
- Hero: «دریافت اعتبار خرید تا ۲۰۰ میلیون تومان» no fee, no guarantor. Limit items 1,000,000,000 / 2,000,000,000 / 10,000,000,000 (likely rial = 100M/200M/1B toman; 3rd inactive) → unit ambiguity.
- Steps: اعتبارسنجی (<1 min) → upload purple Sayadi cheque photo → send/deliver the physical cheque → activated.
- Use: buy with credit, repay within 7 days with no fee; late fee after; repay restores limit.
- Eghtesad Novin bank credit (third-party) request flow.

### Loyalty «بیزینس‌کلاب»
Tiers: base, bronze, silver, gold, emerald, diamond (own colour ramps --loyalty-*-100..700). Reward strings in constants look like placeholders (e.g., "dinner with a celebrity", "iPhone draw") → don't treat as real. Steps: register+KYC → earn points by online purchase (>30 pts/month to move up) → level up → monthly rewards. Earn: business licence upload 2, each purchase day 5, every 10M toman 3, KYC 2, reward products/baskets variable. Rewards types: coupon, credit increase, gift. Score: current/unlocked/locked.

### Drop-ship = «فروش اقساطی» (retailer sells to own customers on instalments)
Retailer uploads customer list (Excel), credit check within 48h, then picks a customer with credit; prices shown = sale price with retailer's default profit margin; places order for that customer; table: name, national ID, credit, orders.

### Other
- Komiteh Emdad: dedicated channel (custom price «قیمت سفارشی», verify, own cart/pay/thank-you) — partner/charity program.
- Landing campaigns: gold-ce, hot-summer, discount campaign with codes.
- Value props (old Home): «قیمت‌گذاری به نرخ همکار», multiple payment options (multi-step or credit), free fast shipping Tehran + other cities, single / bulk / bundle ordering.
- RFQ «درخواست تامین» from PLP when out of stock: item, qty, optional offered price, details; notify when supplied; similar products. RFQ tutorial: submit form → receive offers → pick offer.
- PLP: ListItemV2 «انتخاب رنگ», «این محصول تنوع ندارد», variant shows «بدون گارانتی», «تنها N عدد» (low stock), quantity «حداکثر» (max cap).
- LimitationBanner: call number if product not available.
- Token systems mixed in one app: kit-* (mega-seeds), uiKit-* (ui-kit), raw hex.

## Figma text extraction (read-only, 2026-10-19)
### CE Homepage V2 › UI Design V2.0 (1643:85838)
Frames: Homepage Not logged in / Logged in (M & D), Guest user Type 1/2, Logged-in user, left-widget (not logged in / logged in with no order / registered / unregistered), herosection-desktop, last-purchase-carousel [D/M], product-card [last purchase], HomePage [Promoters], Promoters section [D/M], Homepage for Promoters.
Content: categories grid; USPs «سفارش کالا به صورت تکی و عمده», «ارسال رایگان و سریع سفارشات», «روش‌های متنوع پرداخت», «قیمت‌گذاری به نرخ همکار»; «سبدهای امروز» bundle cards (number, item count «۳۰۰ کالا», «۴ مدل», labels پرفروش‌ترین / به‌صرفه‌ترین / تمام شد / «... فقط در این سبد!»); carousels جدیدترین کالاها, پرفروش‌ها, پرچمدارهای بازار; logged-in widget: سفارش‌های جاری, تحویل شده, order number + DKO code, «دریافت فاکتور», «پرتکرارترین خریدهای شما», «خرید‌های قبلی شما»; guest: first-order discount code welcome1 (1% off whole order, enter at final step), «همین حالا ثبت‌نام کن و تخفیف بگیر!».
Segment / promoter carousels titles: پر تقاضاهای هفته, پر سودهای بیزینس, خوش قیمت‌های بازار, آخرین بازدیدهای شما, مناسب فروشگاه شما, کالاهای رو به رشد, پرطرفدارهای هفت روز اخیر, پیشنهادهای بیزینس, بهترین حاشیه سود شما, پیشنهاد مناسب فروشگاه شما, محصولات در حال رشد بازار, محصولاتی که احتمالا دوست داشته باشید.
Footer: sales line, support Sat–Thu 8–17 vs «هفت روز هفته ۲۴ ساعته» (conflict in same file), FAQ tabs: سبدهای خرید / ارسال کالا / روش‌های پرداخت.

### Cart/Checkout file › 📱 Cart (6309:5475)
Cart v2.0/2.1/2.2, Cart Production, Hybrid / Checkout, basket-card v2.0.
Rules/copy: delivery «تحویل امروز برای تهران و البرز», «تحویل فردا برای سایر مراکز استان‌ها», free; «اگر تا قبل از ساعت ۱۵ خرید کنید / بعد از ۱۵», «تحویل ۲ روزه»; unit price «قیمت هر واحد»; quantity «حداکثر»; prices incl. 10% VAT; «مبلغ سفارش هنوز پرداخت نشده و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند»; OOS auto-removed and total updated; stock decreased alert «تعداد این کالا در سبد خرید از ۱۵ به ۸ عدد تغییر کرد»; club points «با نهایی کردن این خرید، ۲۰ امتیاز...»; «برای دریافت امتیاز بیزینس‌کلاب، مبلغ سبد خرید باید حداقل ۱۰ میلیون تومان باشد»; «خرید زیر ۵۰ میلیون تومان، نیازمند بارگذاری جواز کسب است» (upload inline in cart); KYC block «برای ثبت سفارش، ابتدا باید احراز هویت خود را تکمیل کنید», «در حال بررسی اطلاعات... پس از تکمیل اعتبار سنجی در ساعات آینده»; assisted cart «سبد خرید آماده پرداخت است — همکاران ما سبد خرید شما را ساخته‌اند و قیمت‌ها برای حساب شما تنظیم شده است»; cross-sell «سبد خریدتان را کامل‌تر کنید», «اکسسوری رو جا نذار»; stepper Cart › Shipping › Payment; orderer vs receiver (سفارش دهنده / تحویل گیرنده); invoice copy conflict: «فاکتور پس از تحویل کامل کالا...» vs «صورتحساب رسمی پس از پرداخت و ثبت سفارش...».

### Hybrid payment B2B (3424:15727)
Methods in one checkout: اعتبار دیجی‌کالا بیزینس (total / remaining), چک صیادی (open cheques, remaining credit ceiling, add cheque, cheque status تایید شده / در حال بررسی, per-cheque usable amount, due date), کیف پول (balance, top-up), وام بانک اقتصاد نوین, حواله بانکی (account number or deposit ID), Digipay (اعتباری ۱ قسط, اقساطی ۴ قسط, کیف پول دیجی‌پی), پرداخت آنلاین (cap 200,000,000 toman), کیف پول مهراد, discount code, gift card. «باقی‌مانده پرداخت», «مبلغ سفارش بالاتر از سقف پرداخت اینترنتی است...». Discount after cheques → cheque amounts must be re-entered. Outcomes: پرداخت با موفقیت انجام شد / پرداخت در حال بررسی است (cheques under review) / پرداخت ناموفق → پرداخت مجدد. Order detail: delivery slot «یکشنبه ... ساعت ۱۶ تا ۱۸», delivery code + national ID at handover, payment breakdown per method, «دانلود فاکتور». Includes «Hybrid Payment — Gap 4 & Gap 5 NEW Figma Proposals (2026-09-19)». Profile mock shows legal user + company + «مدیریت چک ها» menu (not in live menu).

## Live logged-in walkthrough b2b.digikala.com (2026-10-19; test account = natural person, KYC verified, base tier, no orders). Personal data intentionally NOT recorded.
- Profile header: account type «کاربر حقیقی», «احراز هویت شده», CTA «آپلود پروانه کسب», tier «سطح پایه», «امتیاز شما در ماه جاری», wallet balance + «افزایش موجودی», «دریافت اعتبار خرید». Menu: خلاصه فعالیت‌ها, سفارش‌های من, تاریخچه تراکنش‌ها, درخواست‌های خرید, آدرس‌ها, اطلاعات کاربر, تماس با ما, خروج (no «مدیریت چک ها», no «مدیریت API» in live menu).
- Profile summary order chips: در حال بررسی / در حال پردازش / تحویل شده / لغو شده ; orders page tabs: همه / در حال بررسی / در حال انجام / تحویل شده / لغو شده → label drift (پردازش vs انجام).
- /profile/personal-info: identity info; «ثبت کد اقتصادی» → invoices sent to tax system (سامانه مودیان) as customer type 1 (business/trader); «پروانه کسب (اختیاری)» png/jpg ≤20MB; rule: without business licence every order must be ≥ 50M toman. (Figma: «خرید زیر ۵۰ میلیون تومان، نیازمند بارگذاری جواز کسب است» — consistent.) Naming drift: پروانه کسب vs جواز کسب.
- /profile/cheques (reachable by URL, not in menu): باقیمانده سقف اعتباری / سقف اعتباری / در انتظار تسویه; tabs چک‌های باز / آرشیو چک‌ها; empty: «در هنگام ثبت سفارش می‌توانید چک تعریف کنید».
- /profile/transaction: table عنوان / روش پرداخت / مبلغ / شماره تراکنش / تاریخ و ساعت / وضعیت; date range filter.
- /profile/wallet/cash-in: tabs پرداخت آنلاین (instant) / واریز به حساب بانکی; presets 50/100/200/400 میلیون.
- /profile/rfq: tabs همه/جدید/در حال بررسی/پایان یافته; columns title, status, code, date.
- /profile/club: current level based on LAST month's score; points this month; «۳۶ امتیاز مانده به سطح برنز»; days left in period; tabs جوایز شما / تاریخچه امتیازات.
- /club live tiers: پایه 0–35 (–), برنز 36–200 (2M toman code), نقره 201–800 (5M), طلا 801–3000 (10M), زمرد 3001–7000 (15M), الماس 7001+ (20M) + lottery chance. Earn: ثبت نام 1, احراز هویت 2, بارگذاری جواز کسب 5, each 10M toman online 2, each 10M via sales agent (کارشناس فروش) 1, each online purchase day 2, each agent purchase day 1, point bundles/products variable. «ویژه‌ی فروشندگان محصولات دیجیتال». → CONFLICT with code constants (licence 2, day 5, 10M 3) and code tier ranges (placeholder).
- /credit live (despite code flag isCreditDeactive=true): «تا ۲۰۰ میلیون تومان», no fee, no guarantor, «اعتبار ۶ ماهه تنها با یک برگه چک صیادی», 7-day fee-free repayment; tiers 100M / 200M / up to 1B «به زودی».
- /checkout/cart: all items OOS banner «کالاهای سبد خرید شما ناموجود شده‌اند...»; unit price line, colour, guarantee.
- /basket «سبدهای روز» empty: «سبد موبایل موجود نیست».
- /rfq live: «سفارشی قیمت بگیرید!» search product name → add → «ثبت و ارسال درخواست»; FAQ: خرید سفارشی چیست / تفاوت با خرید از سایت / پیشنهاد معامله چیست.
- /drop-ship → 404 live; /profile/api-management → 404 live (code exists → feature-flagged / not released).
- Home logged-in: categories (موبایل, لپ تاپ, هدفون, کنسول بازی, هارد و SSD, تبلت, ساعت هوشمند, پرینتر, اسپیکر, پاور بانک, مانیتور, شارژر, قطعات, فلش مموری, کامپیوتر همه کاره, تجهیزات شبکه), delivery hero, first-purchase code banner, USP strip, «سور پرایس» (orange band), «سودِ اخرِ ماه IT», FAQ (VAT included?, official seller?, cheque purchase?, credit purchase?, delivery timing?, in-person purchase?). Bottom nav (mobile): خانه, دسته‌بندی‌ها, سبد خرید, سفارش‌ها, حساب کاربری. Footer: support Sat–Thu 8–17.
- Prices on live: some items show «% ۱» discount with strike price.

## New Figma files from user (2026-10-19)
### Loyalty Program (caOX7jmTuJvWw9pcebAV3G) pages: Cover, Benchmark, Lo-Fi wireframes, Local components, Exploration, Handoff, Brochure, Design Check, Archive.
Handoff frames: Loyalty Program - Basket (D/M, cart banner bg), User profile ×14 states, Landing, Homepage Registered User Alt.3, Main Widget logged in (M), Profile Button Animation, reward row, Thank-you Online Pay Success (with after-payment loyalty banner), Colors, Badge on Cards, BG, Tiers (Bronze/Silver... Dark/Light/Gradient fill/Gradient border).
Content: «با نهایی کردن این سفارش ... امتیاز دریافت خواهید کرد»; profile club: days left in period, «سطح فعلی شما بر اساس امتیاز شما در ماه گذشته»; rewards tab: «دریافت جایزه», reward types «افزایش سقف اعتباری», «کد تخفیف ۱ میلیون تومانی», physical gift «این جایزه به‌صورت هماهنگی تلفنی تحویل می‌شود»; reward states استفاده شده / در حال بررسی / رد شده + reason; copy code, «کد تخفیف تا پایان ماه قابل استفاده است»; FAQ: tier set on first day of each month; one tier per month; does credit-limit increase need preconditions?; do points expire?; earn variants incl. «هر ۵ میلیون تومان خرید» (another conflict); tier table placeholders (base 0–30, gold 31–100...). Profile menu in Figma: سفارش‌های من, درخواست‌های خرید, آدرس‌ها, علاقه‌مندی‌ها (wishlist), اطلاعات کاربر; header dropdown «اعتبار من». Profile orders widget states: جاری, در انتظار پرداخت, لغو شده, مرجوع شده, تحویل شده, خریدهای سفارشی. Legal profile shows «اعتبار شما» + «تاریخ انقضای اعتبار».
### B2R Platform - C-Credit (2JMEivE0r2z4cG95IeZhcc) Handoff «C-Credit flow»
C-Credit = instalment resale (code module DropShip, route /drop-ship). Steps: 1 C-Credit touchpoint in header; 2 login for /dropship; customers list; upload Excel; 5 PLP in C-Credit mode (customer selected / not selected); 6 DKPC modal with price edit «قیمت خرید شما / حاشیه سود / قیمت فروش اقساطی» (default margin editable); 7 basket in C-Credit mode «فروش اقساطی به {customer}», «اعتبار مشتری»; order review same as default; set payment method: order ≤ customer credit (credit only) / order > customer credit (remainder via wallet, IPG ≤200M, cheque, bank transfer «واریز بدون سقف»); customer confirms via OTP sent to customer's mobile «تایید مشتری ... رمز یکبار مصرف» (timer, resend, wrong code); stock check error before payment; «تغییر در سبدخرید» changes notice; profile «سفارش‌های فروش اقساطی» with buyer name, payment «فروش اعتباری»; access gate «امکان دسترسی به بخش فروش اقساطی برای شما وجود ندارد»; PLP sort includes «پربازدیدترین»; «قیمت استعلامی» / «قیمت سفارشی» price types. Customer credit shown in rial in one place (۸۰۰٬۰۰۰٬۰۰۰ ریال) vs toman elsewhere.
### Profile (I4xq8drvDqIyhf3NFlDWt0) page Profile: frames upload alert, KYB, Pay with IPG default.
KYB (legal): representative info (name, birth date, national ID, mobile); company info (national ID «شناسه ملی», name, registration number, economic code, phone, postcode, email, address); documents روزنامه رسمی + معرفی‌نامه (png/jpg ≤20MB) with states در حال بررسی / تایید شده / rejected with reason → «ثبت مجدد»; banner «نیاز به اصلاح مدارک بارگذاری شده — آپلود مجدد مدارک»; header «احراز هویت تکمیل نشده». Profile menu here includes «مدیریت چک‌ها», wallet, «اعتبار خرید».

## B2R decisions (19 Oct 2026, design lead)
D1 Loyalty: live /club is source of truth (earn rules + tier ranges); align code/Figma.
D2 Credit: /credit offer (100–200M toman, one Sayadi cheque, 7-day fee-free) = current product; revolving credit PRD = target replacing it.
D3 Credit term: «حد اعتباری» (same as B2E).
D4 Licence term: «پروانه کسب».
D5 Order statuses: keep 4 — در حال بررسی · در حال پردازش · تحویل شده · لغو شده; same labels everywhere; «سفارش جاری» only a home grouping.
D6 RFQ name: «درخواست خرید» for both entry points.
D7 Delivery: free; same day Tehran & Alborz, next day other provinces.
D8 Support hours: Sat–Thu 8–17.
D9 Invoice: available after payment and order.
D10 Home: Figma Homepage V2 is reference only; home needs redesign.
D11 Theme: keep navy; rename Theme mode CE → B2R.
D12 Voice: neutral «شما»; no «همکار».
D13 Research: not now; personas stay hypotheses.
Still open: hidden features (C-Credit, cheques mgmt, API mgmt, Komiteh Emdad) — no preference; final cart/checkout Figma (none final, needs cleanup); money format & cheque method name; min-order rule; points threshold copy.
