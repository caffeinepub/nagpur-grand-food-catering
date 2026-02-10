import { useState } from 'react';
import { Phone, MapPin, Instagram, Facebook, MessageCircle, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

// Gallery images
const galleryImages = [
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121110-1.jpeg', alt: 'Elegant buffet setup with golden lighting' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121110-2.jpeg', alt: 'Professional catering service at outdoor venue' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121110.jpeg', alt: 'Live cooking station with chef' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121111-1.jpeg', alt: 'Beautiful event decoration with lighting' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121111-2.jpeg', alt: 'Outdoor catering setup at night' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121111-3.jpeg', alt: 'Premium buffet counter with golden accents' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121111.jpeg', alt: 'Grand wedding catering setup' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121730.jpeg', alt: 'Live dosa counter at event' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121731-1.jpeg', alt: 'Guests enjoying live food preparation' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121731-2.jpeg', alt: 'Interactive food station' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121731.jpeg', alt: 'Professional catering team in action' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-121823.jpeg', alt: 'Elegant indoor buffet setup' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-122222.jpeg', alt: 'Premium white and gold catering counter' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-123340.jpeg', alt: 'Professional catering staff' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-123431.jpeg', alt: 'Business card display' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-123642.jpeg', alt: 'Promotional material' },
  { src: '/assets/gallery/whatsapp-image-2026-02-09-124114.jpeg', alt: 'Quotation document' },
];

function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  const whatsappMessage = encodeURIComponent(
    'Hello! I would like to inquire about catering services for my event. Please share details and pricing.'
  );
  const whatsappLink = `https://wa.me/917620861034?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/ngfc-logo.dim_1024x1024.png" 
              alt="Nagpur Grand Food & Catering Logo" 
              className="h-10 w-10"
            />
            <span className="font-display text-lg font-bold text-foreground">
              Nagpur Grand Food & Catering
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#booking" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button onClick={scrollToBooking} className="hidden md:inline-flex">
            Book Your Date
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/generated/ngfc-hero-bg.dim_2400x1350.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-background/95" />
        <div className="container relative z-10 py-20 text-center">
          <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
            <img 
              src="/assets/generated/ngfc-wordmark.dim_1800x600.png" 
              alt="Nagpur Grand Food & Catering" 
              className="mx-auto h-20 md:h-28 w-auto drop-shadow-2xl"
            />
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight">
              Nagpur's Trusted Name for Grand Occasions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 font-light max-w-3xl mx-auto">
              Authentic North & South Indian Catering for Weddings, Corporate Events, and Special Celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="text-lg px-8 py-6 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
              >
                Book Your Date
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="text-lg px-8 py-6 bg-background/20 backdrop-blur border-primary-foreground/30 text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Authentic Flavors, Grand Celebrations
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-gold-glow transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display">Grand Weddings</CardTitle>
                <CardDescription className="text-base">
                  Full-service catering from Achari to Buffet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Make your special day unforgettable with our comprehensive wedding catering services. 
                  From traditional ceremonies to grand receptions, we handle every detail with care and authenticity.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-gold-glow transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-display">Corporate Events</CardTitle>
                <CardDescription className="text-base">
                  Clean, professional high-tea and lunch setups.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Elevate your corporate gatherings with our professional catering services. 
                  Perfect for conferences, meetings, product launches, and team celebrations.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-gold-glow transition-all duration-300 border-2 hover:border-primary/50 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-display">Special Occasions</CardTitle>
                <CardDescription className="text-base">
                  Birthdays, Anniversaries, and Puja ceremonies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Celebrate life's precious moments with authentic cuisine. 
                  We cater to all your special occasions with traditional recipes and modern presentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our premium catering experiences
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => !imageErrors.has(index) && openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-muted hover:shadow-gold-glow transition-all duration-300"
              >
                {imageErrors.has(index) ? (
                  <div className="h-full w-full flex items-center justify-center bg-muted">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">Image loading...</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={() => handleImageError(index)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-primary-foreground text-sm font-medium line-clamp-2">
                        {image.alt}
                      </p>
                    </div>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Booking/Contact Section */}
      <section id="booking" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-primary/20 shadow-gold-glow">
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="font-display text-3xl md:text-4xl">
                  Book Your Date
                </CardTitle>
                <CardDescription className="text-lg">
                  Contact us today to discuss your event requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <a
                    href="tel:+917620861034"
                    className="flex items-center gap-4 p-6 rounded-lg border-2 border-border hover:border-primary hover:shadow-gold-glow transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="font-semibold text-foreground">+91 76208 61034</p>
                    </div>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 rounded-lg border-2 border-border hover:border-primary hover:shadow-gold-glow transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-semibold text-foreground">Chat with us</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-lg border-2 border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Visit Us</p>
                    <p className="font-semibold text-foreground">
                      Nagpur Grand Food & Catering<br />
                      Nagpur, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-center text-muted-foreground mb-4">Follow us on social media</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/generated/ngfc-logo.dim_1024x1024.png" 
                alt="Nagpur Grand Food & Catering Logo" 
                className="h-10 w-10"
              />
              <div>
                <p className="font-display font-bold text-foreground">
                  Nagpur Grand Food & Catering
                </p>
                <p className="text-sm text-muted-foreground">
                  Authentic Catering Since Years
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Nagpur Grand Food & Catering. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Built with <Heart className="inline w-4 h-4 text-primary" /> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-7xl w-full p-0 bg-secondary/95 backdrop-blur">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 hover:bg-background transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          <div className="relative flex items-center justify-center min-h-[80vh]">
            <button
              onClick={prevImage}
              className="absolute left-4 z-50 rounded-full bg-background/80 p-3 hover:bg-background transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex flex-col items-center justify-center p-8 max-w-full">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="max-h-[70vh] max-w-full object-contain rounded-lg"
              />
              <p className="mt-4 text-center text-primary-foreground/90 max-w-2xl">
                {galleryImages[currentImageIndex].alt}
              </p>
            </div>
            <button
              onClick={nextImage}
              className="absolute right-4 z-50 rounded-full bg-background/80 p-3 hover:bg-background transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
