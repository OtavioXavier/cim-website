import Hero from './ui/hero/hero';
import SectionNews from './ui/sectionNews/sectionNews';
import SectionRoad from './ui/sectionRoad/sectionRoad';
import SectionTeam from './ui/sectionTeam';

export default function Home() {
  return (
    <div className="overflow-hidden">
     <Hero />
     <SectionNews />
     <SectionRoad />
     <SectionTeam />
    </div>
  );
}