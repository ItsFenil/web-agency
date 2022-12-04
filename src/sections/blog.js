/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/blog/1.png';
import thumb2 from 'assets/images/blog/2.png';
import thumb3 from 'assets/images/blog/3.png';
import thumb4 from 'assets/images/blog/4.png';

const data = [
  {
    id: 1,
    slug: '#how-to',
    thumbnail: null,
    showDescription: true,
    title: `Call Us`,
    description: `+91 7738100952`,
  },
  {
    id: 2,
    slug: '#how-to',
    thumbnail: null,
    showDescription: true,
    title: `Send us a Email`,
    description: <a href="mailto:fenilrmehta@gmail.com">Send a message</a>,
  },
  {
    id: 3,
    slug: '#how-to',
    thumbnail: null,
    showDescription: true,
    title: `WhatsApp Us`,
    description: `+91 7738100952`,
  },
  // {
  //   id: 4,
  //   slug: '#how-to',
  //   thumbnail: thumb2,
  //   showDescription: true,
  //   title: `Multiple art board prototype with Figma`,
  //   description: `Beyond launched anti bias, a Chrome extension that replaces LinkedIn profile photos`,
  // },
  // {
  //   id: 5,
  //   slug: '#how-to',
  //   thumbnail: thumb4,
  //   showDescription: false,
  //   title: `Team presentation with latest user interface & experience reach more`,
  //   description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  // },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Contact Us"
          description="Want to talk with Us, Contact us with below information."
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: 'relative',
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};