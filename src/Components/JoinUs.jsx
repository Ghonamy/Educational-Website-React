import SectionHeader from "./SectionHeader";

function JoinUs() {
  return (
    <section id="join-us">
      <div className="container">
        <SectionHeader
          title={"Join Us"}
          description={
            "Have Questions or Need Assitance? Reach out to us Through our Team We are Here To Help and Ensure You Have the Best Experience Possible!"
          }
        />
        <div className="form">
          <input type="email" placeholder="Enter Your Email.." />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
export default JoinUs;
