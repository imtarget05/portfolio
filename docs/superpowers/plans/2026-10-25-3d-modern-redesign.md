# Plan: Redesign Portfolio → "3D Modern"

**Ngày:** 2026-10-25
**Scope:** Chỉ đổi style (giữ nguyên data `src/content/data.ts`, sections, ngôn ngữ VI/EN, dark/light toggle)
**Stack thêm:** `three`, `@react-three/fiber`, `@react-three/drei` (tương thích React 18 / Next 14)

## Direction (chốt với user)

- **Công nghệ:** Hero dùng **React Three Fiber** (cảnh 3D thật), sections còn lại dùng **framer-motion 3D nhẹ** (tilt, perspective, parallax khi scroll).
- **Palette:** blend "Dark tech neon" + "Cyber luxury" — nền tối cao cấp, typography lớn, glow tinh tế. **Cả 2 theme sáng/tối đều phải đẹp** (giữ hệ CSS vars hiện tại, chỉ nâng giá trị màu).
- **Hero:** cảnh 3D năng động + nhân vật mascot **cầm thiết bị Apple (iPad)** — theo reference screenshot.

## Hạn chế cần biết (trung thực)

Mascot trong reference là **ảnh minh họa 2D** (draw tay/AI art) — code không tự sinh được ảnh kiểu đó. 2 lựa chọn:

- **(A) Chọn trong plan này:** mascot **low-poly 3D** dựng bằng R3F primitives (đầu/thân/cầm iPad thật ngoài cảnh) — tự render, không cần asset, hợp style 3D.
- **(B) Sau này:** nếu bạn có PNG character trong suốt (tự vẽ/AI), thả vào `public/` là thay được.

Plan này dùng (A), cấu trúc code cho phép thay bằng ảnh (B) sau.

## Tasks

- [ ] 1. Cài deps: `three @react-three/fiber @react-three/drei`
- [ ] 2. Nâng design tokens: `globals.css` + `tailwind.config.ts` — palette dark-tech/luxury cho cả light & dark, utility `.glow`, `.gradient-text` mới, motion tokens
- [ ] 3. Hero 3D (`src/components/three/HeroScene.tsx` — `'use client'`, dynamic import `ssr:false`):
  - Canvas full hero, `dpr` clamp [1, 1.75], `frameloop` theo visibility
  - **Floating devices:** MacBook / iPad / iPhone dựng từ RoundedBox + emissive "code screen" texture, trôi lơ lửng, nghiêng theo chuột (mouse parallax) & rotate chậm
  - **Mascot low-poly:** nhân vật cầm iPad, đầu quay theo chuột nhẹ
  - **Particle field** phản ứng chuột (Points, không đắt)
  - Typography overlay kiểu reference: tên chữ rất lớn đè lên cảnh, badge "Available for hire"
  - Bỏ 2 ảnh Unsplash stock hiện tại (không license/control)
- [ ] 4. Sections 3D framer-motion: tilt card theo chuột (Projects, TechStack), reveal perspective-tái (About, Expertise, Experience, Services), Contact glow
- [ ] 5. Nav/Footer: giữ nguyên chức năng, polish glass style cho khớp
- [ ] 6. Performance & a11y: `prefers-reduced-motion`→ tắt scene motion; mobile → giảm particle count; keyboard nav giữ nguyên
- [ ] 7. Verify: `npm run lint` + `npm run build` pass

## Không làm

- Không đổi data/copy nội dung (`data.ts`, LanguageProvider giữ nguyên)
- Không đụng content pack `github_portfolio_content_2026-10-25/` (chờ bước riêng)
- Không thêm WebGL postprocessing nặng
