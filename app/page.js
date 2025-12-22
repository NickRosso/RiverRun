export default function Home() {
  return (
    <>
      <h2>Welcome to River Run Ranch Animal Rescue</h2>

      <p>
        Our mission is rescuing and finding forever homes for abandoned,
        homeless, and stray puppies and kittens in the Texas Hill Country.
      </p>

      <p>
        We are a <strong>501(c)(3) nonprofit</strong> dedicated to saving lives,
        providing medical care, and finding loving forever homes.
      </p>

      {/* FACEBOOK SECTION */}
      <section
        style={{
          marginTop: "3rem",
          maxWidth: "1200px",
          marginInline: "auto",
          paddingInline: "1rem",
        }}
      >
        <h3>Latest Updates</h3>

        <p>
          Follow our rescue stories, intake announcements, and adoption updates
          directly from our Facebook page.
        </p>

        <a
          href="https://www.facebook.com/riverrunranchrescue"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "var(--green-dark)",
            color: "var(--cream)",
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            fontWeight: 600,
            textDecoration: "none",
            marginBottom: "1.5rem",
          }}
        >
          Visit us on Facebook →
        </a>

        {/* CARD WRAPPER */}
        <div
          style={{
            background: "var(--cream)",
            padding: "1rem",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          {/* CENTERED IFRAME */}
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Friverrunranchrescue&tabs=timeline&width=1200&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false"
            width="100%"
            height="600"
            style={{
              border: "none",
              overflow: "hidden",
              borderRadius: "12px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            title="River Run Ranch Facebook Feed"
          />
        </div>
      </section>
    </>
  );
}
