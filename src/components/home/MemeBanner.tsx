import Link from 'next/link'

const STATEMENTS = [
  'Movies became personalities.',
  'Memes became coping mechanisms.',
  'Playlists became diaries.',
  'We made them wearable.',
]

export default function MemeBanner() {
  return (
    <section
      style={{
        background: '#101010',
        borderTop: '1px solid #1A1A1A',
        borderBottom: '1px solid #1A1A1A',
      }}
      className="
        relative
        overflow-hidden
        py-14
        md:py-16
      "
    >
      {/* Ambient glow */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[420px]
          h-[420px]
          rounded-full
          blur-3xl
          opacity-[0.04]
          pointer-events-none
        "
        style={{
          background: '#D4FF00',
        }}
      />

      <div
        className="
          relative
          z-10
          grid
          xl:grid-cols-[1fr_1fr]
          gap-10
          items-center
          px-6
          md:px-10
          xl:px-16
        "
      >

        {/* LEFT SIDE */}
        <div>

          {/* Label */}
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#666] mb-4">
            THE DOPE DRIP ARCHIVE
          </p>

          {/* Heading */}
          <h2
            className="
              font-display
              text-white
              leading-[0.9]
              tracking-[-0.05em]
              mb-6
            "
          >
            <span
              style={{
                fontSize: 'clamp(2.7rem,6vw,5rem)',
              }}
            >
              CLOTHES
            </span>

            <br />

            <span
              style={{
                color: '#D4FF00',
                fontSize: 'clamp(2.7rem,6vw,5rem)',
              }}
            >
              THAT SPEAK
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#888] text-sm md:text-[15px] leading-relaxed max-w-lg mb-8">
            For people who romanticize songs,
            save poetic reels,
            quote movies mid-conversation,
            and joke through emotional damage.
            <br />
            <br />
            Dope Drip is wearable internet culture.
          </p>

          {/* CTA */}
          <Link
            href="/collections/all"
            className="
              inline-flex
              items-center
              gap-3
              font-mono
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#D4FF00]
              transition-opacity
              duration-300
              hover:opacity-70
            "
          >
            Enter The Archive →
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            relative
            flex
            flex-col
            gap-6
            xl:pl-8
          "
        >

          {STATEMENTS.map((line, index) => (
            <div
              key={line}
              className={`
                relative
                ${
                  index % 2 === 0
                    ? 'xl:translate-x-0'
                    : 'xl:translate-x-8'
                }
              `}
            >

              {/* Tiny line */}
              <div className="w-10 h-[1px] bg-[#2A2A2A] mb-4" />

              {/* Statement */}
              <p
                className="
                  font-display
                  text-white
                  leading-[0.95]
                  tracking-[-0.04em]
                "
                style={{
                  fontSize: 'clamp(1.5rem,3vw,2.5rem)',
                }}
              >
                {line}
              </p>
            </div>
          ))}

          {/* Faded background initials */}
          <div
            className="
              absolute
              -bottom-4
              right-0
              font-display
              text-[90px]
              leading-none
              text-white
              opacity-[0.02]
              pointer-events-none
              select-none
            "
          >
            DD
          </div>
        </div>
      </div>
    </section>
  )
}