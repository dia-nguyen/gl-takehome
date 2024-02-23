import BioAgeSection from "./BioAgeSection/BioAgeSection";
import DailyTodosSection from "./DailyTodosSection/DailyTodosSection";
import LogisticTrackSection from "./LogisticTrackerSection/LogisticTrackerSection";

export default function ReportDashboard() {
  return (
    <main className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <BioAgeSection />
        <DailyTodosSection />
        <LogisticTrackSection />
      </div>
    </main>
  );
}