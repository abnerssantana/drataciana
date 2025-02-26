import Link from 'next/link'
import { Container } from '../layout'
import { BlogPost } from '../blog'
import { getPostMetadata } from '@/lib/getPosts'
import { ArrowRight } from 'lucide-react'
import { MotionWrapper, MotionHeading } from '../common/motion'
import { MotionRow } from '../common/motion/MotionBlog'

const BlogPostRow = () => {
  const blogPosts = getPostMetadata();

  return (
    <Container tag='section' variant='lg' className="blogpostrow">
      <div className="blogpostrow__wrapper">
        <MotionHeading 
        headingText="Dicas para sua saúde bucal"
        variant="center"
        label="Blog"
        />

        <MotionWrapper
        className="motioncard--wrapper"
        >
          {blogPosts.slice(0,3).map(post => (
            <BlogPost 
            key={post.slug}
            post={post}
            />
          ))}
        </MotionWrapper>

        <MotionWrapper className='content-center'>
          <Link href="/blog" className='btn btn--link'>
            Todos os posts <ArrowRight height={26} width={26}/>
          </Link>
        </MotionWrapper>
      </div>
    </Container>
  )
}

export default BlogPostRow