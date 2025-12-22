export default function Home() {
  return (
    <>
      <h2>Welcome to River Run Ranch Animal Rescue</h2>

      <p>
        Our Mission Rescuing and finding forever homes for abandoned, homeless and stray puppies and kittens in the Texas Hill Country.
      </p>

      <p>
        We are a <strong>501(c)(3) nonprofit</strong> dedicated to saving lives,
        providing medical care, and finding loving forever homes.
      </p>

      <section
        style={{
          marginTop: "3rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        {/* LEFT SIDE: Mission / Call to Action */}
        <div>
          <h3>Latest Updates</h3>
          <p>
            Follow our rescue stories, intake announcements, and adoption
            updates on Facebook.
          </p>

          <a
            href="https://www.facebook.com/riverrunranchrescue"
            target="_blank"
            style={{
              display: "inline-block",
              background: "var(--green-dark)",
              color: "var(--cream)",
              padding: "0.75rem 1.25rem",
              borderRadius: "6px",
              marginTop: "0.5rem",
            }}
          >
            Visit Us on Facebook
          </a>
        </div>

        {/* RIGHT SIDE: Facebook Embed */}
        <div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Friverrunranchrescue&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
            width="500"
            height="600"
            style={{
              border: "none",
              overflow: "hidden",
              maxWidth: "100%",
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
