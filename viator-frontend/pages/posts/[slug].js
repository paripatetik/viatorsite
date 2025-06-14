import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <article className="prose mx-auto">
        <h1>Post: {slug}</h1>
        <p>Post content will go here.</p>
      </article>
    </Layout>
  );
}
