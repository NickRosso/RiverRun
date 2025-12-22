export default function Adopt() {
  return (
    <>
      <h2>Adopt a Pet</h2>

      <p>
        All of our adoptable puppies and kittens are listed on Petfinder.
        Petfinder allows you to see photos, read full bios, and submit
        adoption applications.
      </p>

      <div
        style={{
          marginTop: "2rem",
          padding: "2rem",
          background: "var(--cream)",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3>View Our Available Pets</h3>

        <a
          href="https://www.petfinder.com/member/us/tx/lampasas/river-run-ranch-and-animal-rescue-tx2892/"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            background: "var(--green-dark)",
            color: "var(--cream)",
            padding: "1rem 1.5rem",
            borderRadius: "8px",
            fontSize: "1.1rem",
          }}
        >
          Browse Pets on Petfinder
        </a>
      </div>

      <section style={{ marginTop: "2rem" }}>
        <h3>Adoption Process</h3>
        <ul>
          <li>Browse available pets on Petfinder</li>
          <li>Submit an adoption application</li>
          <li>Our team will contact you</li>
          <li>Meet your potential new family member</li>
        </ul>
      </section>

      
    </>
  );
}
