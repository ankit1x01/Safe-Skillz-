import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/content'

export const Hero = () => {
  const { hero, trustBadges, stats } = siteContent

  return (
    <section className="relative py-20 lg:py-32 gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <Container className="relative z-10">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {hero.headline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 animate-slide-up">
            {hero.subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                {hero.primaryCta}
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Link to="/trainings">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                {hero.secondaryCta}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 text-sm"
              >
                <CheckCircle size={16} className="text-accent" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}