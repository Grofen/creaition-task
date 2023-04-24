import { useState } from 'react';
import HomeHeader from '@components/pages/home/header';
import Container from '@components/shared/container';

import ItemsForm from './items-form';

const Home = (): JSX.Element => {
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <Container className="pt-24">
      <HomeHeader />
      <ItemsForm
        accept={{
          imgae: ['image/png', 'image/jpeg', 'image/jpg'],
        }}
        isGenerated={isGenerating}
        label="Image"
        name="image"
        setIsGenerated={setIsGenerating}
      />
    </Container>
  );
};

export default Home;
