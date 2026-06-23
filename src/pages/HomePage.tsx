import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroOverlayMarquee from '@/components/sections/hero/HeroOverlayMarquee';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import TeamOverlayCards from '@/components/sections/team/TeamOverlayCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Award, CheckCircle, MapPin, Star, User } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlayMarquee
      tag="המספרה המובילה בגבעתיים"
      title="תספורת מקצועית בגבעתיים עם יחס אישי ותוצאה שמרגישים"
      description="צוות מקצועי, שירות אישי ועיצוב שיער ברמה גבוהה בלב גבעתיים."
      primaryButton={{
        text: "לקביעת תור",        href: "#contact"}}
      secondaryButton={{
        text: "חייגו עכשיו",        href: "tel:054-799-8375"}}
      items={[
        {
          text: "מעל 97 ביקורות בגוגל",          icon: Star,
        },
        {
          text: "שירות מקצועי ומסור",          icon: CheckCircle,
        },
        {
          text: "מיקום מרכזי ונוח",          icon: MapPin,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/interior-latino-hair-salon_23-2150555185.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="הצלחות שלנו"
      title="Todiel במספרים"
      description="ניסיון עשיר ושירות ללא פשרות."
      metrics={[
        {
          icon: "Star",          title: "דירוג גוגל",          value: "4.2"},
        {
          icon: "User",          title: "לקוחות מרוצים",          value: "1000+"},
        {
          icon: "Award",          title: "שנות ניסיון",          value: "10+"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesMediaCarousel
      tag="השירותים שלנו"
      title="עיצוב שיער ברמה גבוהה"
      description="מגוון טיפולים מותאמים אישית לצרכים שלכם."
      items={[
        {
          title: "תספורות גברים",          description: "תספורות קלאסיות, פיידים ועיצובים מודרניים.",          buttonIcon: "Scissors",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-barber-combing-moustache-client_23-2147778838.jpg"},
        {
          title: "תספורות נשים",          description: "עיצוב, דירוג, ויעוץ מקצועי לתוצאה מושלמת.",          buttonIcon: "Sparkles",          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-protective-face-mask-getting-her-hair-styled-hairdresser-virus-epidemic_637285-9041.jpg"},
        {
          title: "תספורות ילדים",          description: "חוויה נעימה ומקצועית גם לקטנטנים.",          buttonIcon: "Smile",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-girl-getting-haircut-salon_23-2149870393.jpg"},
        {
          title: "עיצוב זקן",          description: "סידור ועיצוב זקן ברמה גבוהה.",          buttonIcon: "Scissors",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-getting-haircut_23-2150665414.jpg"},
        {
          title: "טיפולי שיער",          description: "טיפולים משקמים לשיער בריא וזוהר.",          buttonIcon: "Heart",          imageSrc: "http://img.b2bpic.net/free-photo/woman-drying-hair-young-girl_23-2147769807.jpg"},
        {
          title: "עיצוב שיער לאירועים",          description: "עיצוב שיער מותאם אישית לאירועים מיוחדים.",          buttonIcon: "Crown",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-preschooler-boy-getting-haircut-children-hairdresser-with-scissors-comb-is-cutting-little-boy-room-with-loft-interior_613910-5696.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="gallery" data-section="gallery">
    <SectionErrorBoundary name="gallery">
          <FeaturesRevealCardsBento
      tag="העבודות שלנו"
      title="גלריית תספורות ועיצובים"
      description="התוצאות מדברות בעד עצמן."
      items={[
        {
          title: "פייד מדויק",          description: "עיצוב פייד מושלם וקווים נקיים.",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-priest-praying-with-rosary_23-2149300805.jpg"},
        {
          title: "תספורת נשים",          description: "עיצוב מדורג ומחמיא.",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/african-american-woman-applying-hairdresser-hairstylist-beauty-saloon_627829-4642.jpg"},
        {
          title: "אווירת הסלון",          description: "חווית טיפוח יוקרתית.",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-standing-bathroom_1157-20467.jpg"},
        {
          title: "עיצוב זקן",          description: "טיפוח וסידור מוקפד.",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/man-barbershop_1303-5409.jpg"},
        {
          title: "עיצוב גוונים",          description: "צבע וטיפול מקצועי.",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-looking-photo-tape-red-background-high-quality-photo_114579-60927.jpg"},
        {
          title: "תוצאה סופית",          description: "לקוח מרוצה לאחר טיפול.",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-getting-haircut_23-2148817196.jpg"},
        {
          title: "סגנון מודרני",          description: "תספורת טרנדית ומעודכנת.",          href: "#",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-sweater-posing-studio_158538-11451.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="why-us" data-section="why-us">
    <SectionErrorBoundary name="why-us">
          <AboutText
      title="למה לבחור ב-Todiel? אנחנו מקשיבים לכל לקוח ומתאימים את העיצוב בדיוק לסגנון שלך עם חומרים איכותיים ויחס אישי."
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="לקוחות ממליצים"
      title="מה אומרים עלינו?"
      description="מעל 97 לקוחות מרוצים בגוגל."
      testimonials={[
        {
          name: "יוסי כהן",          role: "לקוח קבוע",          quote: "המספרה הכי טובה בגבעתיים, שירות מקצועי ויחס אישי.",          imageSrc: "http://img.b2bpic.net/free-photo/pleased-young-beautiful-female-barber-uniform-showing-timeout-gesture-isolated-green-wall_141793-106149.jpg"},
        {
          name: "דנה לוי",          role: "לקוחה",          quote: "ממליצה בחום! עיצוב שיער ברמה גבוהה מאוד.",          imageSrc: "http://img.b2bpic.net/free-photo/confident-slavic-middle-aged-male-barber-uniform-grabbed-chin-isolated-purple-wall_141793-83564.jpg"},
        {
          name: "אבי רוזן",          role: "לקוח",          quote: "מקצוענות ללא פשרות, תספורת מדויקת בכל פעם.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-beautiful-caucasian-woman-black-medical-uniform-standing-studio-competent-female-cosmetologist-holding-arms-crossed-grey-background_7502-9241.jpg"},
        {
          name: "מיכל סגל",          role: "לקוחה",          quote: "אווירה נעימה ושירות מדהים, בהחלט אחזור שוב.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67192.jpg"},
        {
          name: "רועי דויד",          role: "לקוח",          quote: "ספר תותח, ממליץ לכל מי שמחפש סטייל ברמה גבוהה.",          imageSrc: "http://img.b2bpic.net/free-photo/gardening-tools_23-2148013407.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamOverlayCards
      tag="הכירו את הצוות"
      title="המומחים שלנו"
      description="צוות מנוסה שמחכה להעניק לכם שירות."
      members={[
        {
          name: "ישראל",          role: "ספר ראשי",          imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-man-apron-holding-hair-brush-with-serious-face_141793-37302.jpg"},
        {
          name: "משה",          role: "ברבר בכיר",          imageSrc: "http://img.b2bpic.net/free-photo/expressive-young-woman-posing_176474-26075.jpg"},
        {
          name: "שרה",          role: "סטייליסטית",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-with-braids-posing-grey-female-lady-with-modern-hairstyle-studio_549566-491.jpg"},
        {
          name: "דני",          role: "מעצב שיער",          imageSrc: "http://img.b2bpic.net/free-photo/male-hairdresser-posing-salon_23-2150462487.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="שאלות נפוצות"
      title="צריכים תשובות?"
      description="לכל שאלה נוספת, הצוות שלנו כאן בשבילכם."
      categories={[
        {
          name: "שירותים",          items: [
            {
              question: "האם צריך לקבוע תור?",              answer: "מומלץ לקבוע תור מראש כדי להבטיח זמינות."},
            {
              question: "האם יש שירות כניסה חופשית (Walk-in)?",              answer: "משתדלים לתת שירות גם ללא תור במידה ויש זמינות."},
            {
              question: "כמה זמן נמשכת תספורת?",              answer: "בין 30 ל-60 דקות בהתאם לסוג השירות."},
          ],
        },
        {
          name: "כללי",          items: [
            {
              question: "האם יש חניה באזור?",              answer: "כן, יש חניה כחול-לבן ובתשלום קרוב."},
            {
              question: "אילו אמצעי תשלום מתקבלים?",              answer: "מזומן ואשראי."},
            {
              question: "מהן שעות הפתיחה?",              answer: "א'-ה': 09:00-20:00, ו': 08:00-14:00."},
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="קבעו תור עוד היום"
      text="שלחו לנו הודעה בוואטסאפ או התקשרו לקביעת התור הבא שלכם בגבעתיים."
      primaryButton={{
        text: "וואטסאפ",        href: "https://wa.me/972547998375"}}
      secondaryButton={{
        text: "התקשרו עכשיו",        href: "tel:054-799-8375"}}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
