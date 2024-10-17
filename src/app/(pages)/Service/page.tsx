import Image from "next/image"

function Service() {
  return (
    <section>
      <div>
        <h1>Meet Our Partners</h1>
        <div>
        <div><Image src={"/peter.png"} height={100} width={100} alt="Peter Kaiser"></Image></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>

      </div>
    </section>
  )
}

export default Service