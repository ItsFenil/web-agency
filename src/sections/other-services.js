/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';

const data = [
  {
    id: 1,
    icon: icon4,
    // moreLink: '#learn-more',
    title: 'Web Design & UX',
    description: `Our web design & UX services deals with the visual elements and technical execution of the website as well as frame a strategy or solution to deliver a great experience to the users.`,
  },
  {
    id: 2,
    icon: icon5,
    // moreLink: '#learn-more',
    title: 'E-commerce website',
    description: `A website that allows people to buy and sell physical goods, services. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service and we can make it for you.`,
  },
  {
    id: 3,
    icon: icon6,
    // moreLink: '#learn-more',
    title: 'Wordpress website',
    description: `Tired of looking at the same old websites? Don’t worry, we have got you. With more than five years of designing websites according to the niche and target audience, we help you build a website that is just perfect for your business/audience!.`,
  },
  {
    id: 4,
    icon: icon7,
    // moreLink: '#learn-more',
    title: 'MERN development',
    description: `MERN stack includes four key technologies namely: MongoDB, Express.JS, React.JS and Node.JS. We can build your website with trending technology in much faster way.`,
  },
  {
    id: 5,
    icon: icon8,
    // moreLink: '#learn-more',
    title: 'Social Media Marketing',
    description: `Social media marketing is a powerful way for companies of all sizes to reach customers directly through social platforms & generate Leads.`,
  },
  {
    id: 6,
    icon: icon9,
    // moreLink: '#learn-more',
    title: 'Search Engine Optimization',
    description: `Through Top keyword research and white-hat  SEO practices, we can help you achieve high rankings in the search engines.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Other services you must appreciate"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
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
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
