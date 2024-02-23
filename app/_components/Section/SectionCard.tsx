import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function SectionCard({classNames, children}) {
  return (
    <section className={`bg-white rounded-lg p-5 ${classNames}`}>
      <div>
        <p className="text-xl font-bold">Current BioAge & Aging Speed</p>
      </div>
      {children}
    </section>
  )
}