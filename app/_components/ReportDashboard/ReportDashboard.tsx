import BioAgeSection from "./BioAgeSection/BioAgeSection";
import DailyTodosSection from "./DailyTodosSection/DailyTodosSection";
import LogisticTrackSection from "./LogisticTrackerSection/LogisticTrackerSection";

/**
 * TODO: doc string
 */
export default function ReportDashboard() {
  return (
    <main className="container md:max-w-5xl max-w-sm flex-grow mx-auto my-10 pt-12 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BioAgeSection />
        <DailyTodosSection />
        <LogisticTrackSection />
      </div>
    </main>
  );
}