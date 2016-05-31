import React from 'react';

import Helmet from 'react-helmet';
import HeroTitle from 'components/HeroTitle';

const AboutPage = () => (
  <div>
    <Helmet
      title="About"
    />
    <HeroTitle
      title="About Us"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      classes="is-dark"
    />
    <div className="container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis
         rhoncus eros non pretium. Vestibulum felis enim, luctus ut metus at,
         hendrerit sollicitudin erat. Donec tincidunt sodales ipsum, bibendum
         hendrerit arcu. Nunc eget scelerisque dui. Duis tempus magna id nisi
         sagittis, vitae tincidunt lectus dapibus. Cras condimentum metus non
         sapien tincidunt blandit. Nam sit amet leo in urna molestie vehicula.
         Proin posuere tortor et suscipit interdum. Fusce risus massa, egestas
         vel luctus sed, tempor nec tellus. Donec facilisis vulputate diam,
         vel placerat mi tristique vitae. Aenean turpis magna, pretium nec vehicula
         nec, elementum vitae leo. Nunc id rhoncus nisl, rhoncus tristique nunc.
      </p>
    </div>
  </div>
);

export default AboutPage;
