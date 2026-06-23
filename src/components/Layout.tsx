import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "בית",
    "href": "#hero"
  },
  {
    "name": "שירותים",
    "href": "#services"
  },
  {
    "name": "גלריה",
    "href": "#gallery"
  },
  {
    "name": "צוות",
    "href": "#team"
  },
  {
    "name": "צור קשר",
    "href": "#contact"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Why Us",
    "href": "#why-us"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Todiel"
      ctaButton={{
        text: "קבע תור",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Todiel",
          items: [
            {
              label: "שיינקין 8, גבעתיים",
              href: "#",
            },
            {
              label: "054-799-8375",
              href: "tel:054-799-8375",
            },
          ],
        },
        {
          title: "עמודים",
          items: [
            {
              label: "בית",
              href: "#hero",
            },
            {
              label: "שירותים",
              href: "#services",
            },
            {
              label: "צוות",
              href: "#team",
            },
          ],
        },
      ]}
      leftText="© 2024 תודיאל. כל הזכויות שמורות."
      rightText="נבנה על ידי Todiel"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
