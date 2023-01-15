import Back from "../components/Back"

export default function Custom404 () {
  return (
    <section className="min-h-screen text-neutral-400 py-24 md:py-28 max-w-lg m-auto px-4">
      <Back />
      <h1 className="mt-12 text-xl font-inter font-medium text-white not-italic">
      404
      </h1>
      <p className="mt-2 font-inter text-base italic text-neutral-500">
        How did you get here...? {" "}
        <br />
        This place doesn&apos;t exist.
      </p>
    </section>
  )
}
