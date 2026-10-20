import { useEffect, useState, type ReactNode } from "react"

const catchtableUrl = "https://app.catchtable.co.kr/ct/shop/qooqoo_busandongnae"
const mapUrl =
  "https://map.naver.com/p/search/%EC%BF%A0%EC%9A%B0%EC%BF%A0%20%EA%B3%A8%EB%93%9C%20%EB%B6%80%EC%82%B0%EB%8F%99%EB%9E%98%EC%A0%90"

const photos = {
  hero: "https://images.unsplash.com/photo-1562436260-126d541901e0?auto=format&fit=crop&w=2000&q=88",
  sushi:
    "https://images.unsplash.com/photo-1636425730695-febe95eda12e?auto=format&fit=crop&w=1200&q=85",
  seafood:
    "https://images.unsplash.com/photo-1651323018466-b36b7df1d2b1?auto=format&fit=crop&w=1200&q=85",
  platter:
    "https://images.unsplash.com/photo-1562436356-11574662e477?auto=format&fit=crop&w=1200&q=85",
}

type IconName = "arrow" | "calendar" | "car" | "clock" | "close" | "family" | "location" | "menu" | "phone" | "sparkle" | "train" | "users"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <path d="M6 2v4M18 2v4M3 9h18" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
      </>
    ),
    car: (
      <>
        <path d="m5 17-1 2v2M19 17l1 2v2M5 17h14l2-5-2-5H5l-2 5 2 5Z" />
        <circle cx="7" cy="13" r="1" />
        <circle cx="17" cy="13" r="1" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    family: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M4 20v-2a5 5 0 0 1 10 0v2M16 11a3 3 0 0 1 3 3v6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: (
      <path d="M22 17.2v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.5 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2.2Z" />
    ),
    sparkle: (
      <>
        <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" />
        <path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
      </>
    ),
    train: (
      <>
        <rect x="5" y="3" width="14" height="15" rx="3" />
        <path d="M8 7h8M8 12h8M8 21l3-3M16 18l3 3" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v2" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function ButtonLink({
  children,
  href,
  kind = "primary",
}: {
  children: ReactNode
  href: string
  kind?: "primary" | "secondary" | "text"
}) {
  return (
    <a
      className={`button button--${kind}`}
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  )
}

const prices = [
  { label: "평일 런치", detail: "오후 5시 이전 퇴장", price: "28,900원" },
  { label: "평일 디너", detail: "오후 5시 이후 입장", price: "32,900원" },
  {
    label: "주말 · 공휴일",
    detail: "성인 / 중고생",
    price: "37,900원",
    featured: true,
  },
]
const childPrices = [
  ["초등학생 평일", "17,900원"],
  ["초등학생 주말", "18,900원"],
  ["미취학 아동", "8,900원"],
]
const features = [
  {
    icon: "sparkle" as IconName,
    number: "01",
    title: "다채로운 메뉴",
    copy: "초밥과 롤부터 해산물, 그릴, 디저트까지 취향대로 즐기는 풍성한 한 끼.",
  },
  {
    icon: "users" as IconName,
    number: "02",
    title: "넓고 쾌적한 공간",
    copy: "가족 외식부터 단체 모임까지 편안하게 머물 수 있는 여유로운 다이닝.",
  },
  {
    icon: "family" as IconName,
    number: "03",
    title: "아이와 함께",
    copy: "유아 의자와 놀이방이 준비되어 있어 온 가족이 더 편안하게 즐겨요.",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible")
        }),
      { threshold: 0.12 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a aria-label="홈으로" className="brand" href="#home">
          <span className="brand__word">QOOQOO</span>
          <span className="brand__gold">GOLD</span>
          <span className="brand__branch">부산동래점</span>
        </a>
        <nav
          className={`nav ${menuOpen ? "nav--open" : ""}`}
          aria-label="주요 메뉴"
        >
          <a href="#story" onClick={() => setMenuOpen(false)}>
            매장 소개
          </a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>
            이용 가격
          </a>
          <a href="#location" onClick={() => setMenuOpen(false)}>
            오시는 길
          </a>
          <ButtonLink href={catchtableUrl}>예약하기</ButtonLink>
        </nav>
        <button
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <img
            alt="다채롭게 차려진 초밥 플래터"
            className="hero__image"
            src={photos.hero}
          />
          <div className="hero__veil" />
          <div className="hero__content">
            <p className="eyebrow">Premium Sushi &amp; Dining Buffet</p>
            <h1>
              오늘의 맛있는 순간,
              <br />
              <em>골드</em>로 완성하다
            </h1>
            <p className="hero__copy">
              신선한 초밥과 다채로운 요리를 한자리에서.
              <br />
              쿠우쿠우 골드 부산동래점에서 특별한 식사를 즐겨보세요.
            </p>
            <div className="hero__actions">
              <ButtonLink href={catchtableUrl}>
                <Icon name="calendar" size={18} />
                캐치테이블 예약
                <Icon name="arrow" size={18} />
              </ButtonLink>
              <ButtonLink href="#menu" kind="secondary">
                이용 가격 보기
              </ButtonLink>
            </div>
          </div>
          <div className="hero__quick">
            <div>
              <Icon name="clock" />
              <span>매일</span>
              <strong>11:00 — 21:30</strong>
            </div>
            <div>
              <Icon name="location" />
              <span>부산 동래구</span>
              <strong>온천장역 도보 4분</strong>
            </div>
            <div>
              <Icon name="phone" />
              <span>예약 문의</span>
              <strong>0507-1316-9091</strong>
            </div>
          </div>
        </section>

        <section className="intro section" id="story">
          <div className="section-heading reveal">
            <p className="eyebrow eyebrow--dark">QOOQOO GOLD</p>
            <h2>
              모두의 취향이 만나는
              <br />
              <em>프리미엄 다이닝</em>
            </h2>
          </div>
          <div className="intro__grid">
            {features.map((feature) => (
              <article className="feature reveal" key={feature.title}>
                <div className="feature__top">
                  <span className="feature__icon">
                    <Icon name={feature.icon} size={26} />
                  </span>
                  <span className="feature__number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery reveal" aria-label="메뉴 이미지">
          <figure className="gallery__large">
            <img alt="풍성한 해산물 요리" src={photos.seafood} />
            <figcaption>SEAFOOD &amp; GRILL</figcaption>
          </figure>
          <figure>
            <img alt="다양한 종류의 초밥" src={photos.sushi} />
            <figcaption>SUSHI &amp; ROLL</figcaption>
          </figure>
          <figure>
            <img alt="여러 요리가 놓인 다이닝 테이블" src={photos.platter} />
            <figcaption>HOT DISH &amp; DESSERT</figcaption>
          </figure>
        </section>

        <section className="pricing section" id="menu">
          <div className="section-heading section-heading--center reveal">
            <p className="eyebrow eyebrow--dark">PRICE GUIDE</p>
            <h2>이용 가격 안내</h2>
            <p>좋아하는 만큼, 여유롭게 즐겨보세요.</p>
          </div>
          <div className="price-grid">
            {prices.map((item) => (
              <article
                className={`price-card reveal ${
                  item.featured ? "price-card--featured" : ""
                }`}
                key={item.label}
              >
                {item.featured && (
                  <span className="price-card__tag">WEEKEND</span>
                )}
                <p>{item.label}</p>
                <strong>{item.price}</strong>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
          <div className="child-prices reveal">
            <div className="child-prices__title">
              <Icon name="family" />
              <span>어린이 요금</span>
            </div>
            {childPrices.map(([label, price]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{price}</strong>
              </div>
            ))}
            <small>미취학 아동은 36개월 이상부터 적용됩니다.</small>
          </div>
          <p className="pricing__note">
            가격 및 운영 정보는 매장 사정에 따라 변경될 수 있습니다. 방문 전
            예약 페이지에서 최신 정보를 확인해 주세요.
          </p>
        </section>

        <section className="guest-info section" id="amenities">
          <div className="guest-info__heading reveal">
            <div>
              <p className="eyebrow eyebrow--dark">BEFORE YOUR VISIT</p>
              <h2>
                더 편안한 식사를 위한
                <br />
                <em>이용 안내</em>
              </h2>
            </div>
            <p>
              가족 외식부터 단체 모임까지,
              <br />
              방문 전 필요한 정보를 확인해 보세요.
            </p>
          </div>

          <div className="guest-info__grid">
            <article className="info-card info-card--amenities reveal">
              <div className="info-card__header">
                <span className="info-card__icon">
                  <Icon name="sparkle" size={25} />
                </span>
                <span className="info-card__number">01</span>
              </div>
              <p className="info-card__label">AMENITIES</p>
              <h3>편의시설</h3>
              <div className="amenity-list">
                {[
                  "단체 이용 가능",
                  "예약",
                  "무선 인터넷",
                  "유아시설 · 놀이방",
                  "남녀 화장실 구분",
                  "유아의자",
                  "대기공간",
                  "간편결제",
                  "주차",
                ].map((amenity) => (
                  <span key={amenity}>{amenity}</span>
                ))}
              </div>
            </article>

            <article className="info-card info-card--parking reveal">
              <div className="info-card__header">
                <span className="info-card__icon">
                  <Icon name="car" size={25} />
                </span>
                <span className="info-card__number">02</span>
              </div>
              <p className="info-card__label">PARKING</p>
              <h3>주차 안내</h3>
              <strong className="info-card__highlight">2시간 무료</strong>
              <p className="info-card__copy">
                상가 주차장 또는 홈플러스 주차장 이용 시 2시간 무료 주차가
                가능합니다.
              </p>
            </article>

            <article className="info-card info-card--kids reveal">
              <div className="info-card__header">
                <span className="info-card__icon">
                  <Icon name="family" size={25} />
                </span>
                <span className="info-card__number">03</span>
              </div>
              <p className="info-card__label">WELCOME KIDS ZONE</p>
              <h3>웰컴키즈존</h3>
              <strong className="info-card__highlight">
                아이와 함께 편안하게
              </strong>
              <p className="info-card__copy">
                어린이 동반 고객을 환영합니다. 유아의자와 놀이방이 마련되어
                있어 온 가족이 여유롭게 식사할 수 있어요.
              </p>
            </article>
          </div>

          <p className="guest-info__note reveal">
            편의시설 운영 여부는 매장 상황에 따라 달라질 수 있습니다.
          </p>
        </section>

        <section className="location section" id="location">
          <div className="location__map reveal">
            <div className="map-graphic" aria-hidden="true">
              <span className="map-line map-line--one" />
              <span className="map-line map-line--two" />
              <span className="map-line map-line--three" />
              <span className="map-station">온천장역</span>
              <span className="map-pin">
                <Icon name="location" size={28} />
              </span>
            </div>
          </div>
          <div className="location__content reveal">
            <p className="eyebrow">LOCATION</p>
            <h2>
              쿠우쿠우 골드
              <br />
              부산동래점
            </h2>
            <div className="location__rows">
              <div>
                <Icon name="location" />
                <span>
                  <small>주소</small>
                  <strong>
                    부산 동래구 중앙대로 1523
                    <br />
                    SK HUB SKY 5층
                  </strong>
                </span>
              </div>
              <div>
                <Icon name="train" />
                <span>
                  <small>대중교통</small>
                  <strong>
                    부산 1호선 온천장역 3번 출구
                    <br />
                    도보 약 4분
                  </strong>
                </span>
              </div>
              <div>
                <Icon name="car" />
                <span>
                  <small>주차</small>
                  <strong>
                    상가 또는 홈플러스 주차장
                    <br />
                    2시간 무료
                  </strong>
                </span>
              </div>
            </div>
            <div className="location__actions">
              <ButtonLink href={mapUrl}>
                지도에서 보기
                <Icon name="arrow" size={18} />
              </ButtonLink>
              <ButtonLink href="tel:050713169091" kind="text">
                <Icon name="phone" size={18} />
                전화 문의
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="reservation">
          <div className="reservation__content reveal">
            <p className="eyebrow">MAKE A RESERVATION</p>
            <h2>
              기다림 없이,
              <br />더 맛있는 시간으로
            </h2>
            <p>원하는 날짜와 시간을 미리 예약해 보세요.</p>
            <ButtonLink href={catchtableUrl}>
              지금 예약하기
              <Icon name="arrow" size={18} />
            </ButtonLink>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand brand--footer">
          <span className="brand__word">QOOQOO</span>
          <span className="brand__gold">GOLD</span>
        </div>
        <div>
          <strong>쿠우쿠우 골드 부산동래점</strong>
          <span>부산 동래구 중앙대로 1523 SK HUB SKY 5층</span>
          <span>0507-1316-9091 · 매일 11:00 — 21:30</span>
        </div>
        <p>© QOOQOO GOLD BUSAN DONGNAE. ALL RIGHTS RESERVED.</p>
      </footer>
      <div className="mobile-reserve">
        <ButtonLink href={catchtableUrl}>
          <Icon name="calendar" size={18} />
          캐치테이블 예약
        </ButtonLink>
      </div>
    </div>
  )
}
