import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { siteContent } from '../../data/content'

export const Hero = () => {
  const { hero, trustBadges } = siteContent

  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{
          backgroundImage: 'url(/gisec-global/1746733553586.jpg)',
        }}
      ></div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/90 to-accent/95"></div>

      {/* Additional Dark Layer for Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/40"></div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center text-white max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6 animate-fade-in">
            <div className="px-6 py-3 bg-white/95 backdrop-blur-md rounded-full border border-white shadow-xl">
              <span className="text-sm font-bold tracking-wide text-primary-dark">🛡️ NCSC Aligned Training Provider</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 animate-fade-in leading-tight">
            <span className="block text-white drop-shadow-2xl">
              {hero.headline}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto text-white animate-slide-up font-normal leading-relaxed drop-shadow-lg">
            {hero.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-50 shadow-2xl hover:shadow-white/20 transform hover:scale-110 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl group"
              >
                {hero.primaryCta}
                <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/trainings">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl hover:shadow-white/20 transform hover:scale-110 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/10"
              >
                {hero.secondaryCta}
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 text-sm bg-white/95 backdrop-blur-md px-5 py-4 rounded-xl hover:bg-white transition-all duration-300 border border-white shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <CheckCircle size={20} className="text-primary flex-shrink-0" strokeWidth={2.5} />
                <span className="font-bold text-gray-800">{badge}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="inline-flex flex-col items-center gap-2 text-white drop-shadow-lg">
              <span className="text-xs font-bold tracking-wider">SCROLL TO EXPLORE</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}