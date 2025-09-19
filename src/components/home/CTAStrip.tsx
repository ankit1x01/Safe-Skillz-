import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/content'

export const CTAStrip = () => {
  const { ctaStrip } = siteContent

  return (
    <section className="py-16 gradient-bg">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaStrip.headline}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            {ctaStrip.description}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              {ctaStrip.buttonText}
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}