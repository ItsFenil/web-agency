/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Marketing & advertising',
    description: `Market your business and avail more opportunities. Our team helps you with complete marketing solutions for your brand to help you generate leads and accelerate your sales by strategic campaigns and market research analysis.`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Branding',
    description: `Add to your brand’s value by creating brand identity and its awareness among the masses. Reach new audiences and develop a loyal base of customers by our tried and tested method of complete branding solutions tailor-made for every business.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Website Development',
    description: `Tired of looking at the same old websites? Don’t worry, we have got you. With more than five years of designing websites according to the niche and target audience, we help you build a website that is just perfect for your business/audience!.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Grow your startup with our Service"
          description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
