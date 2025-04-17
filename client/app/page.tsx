import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PawPrint, MapPin, Stethoscope, Search, BookOpen, Apple } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 bg-white">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Barksly.ai Logo"
            width={50}
            height={50}
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-xl font-semibold text-slate-800">Barksly.ai</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#mission" className="text-slate-600 hover:text-slate-900 transition-colors">
            Mission
          </a>
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">
            Stories
          </a>
        </div>
        <Button className="rounded-full bg-slate-800 hover:bg-slate-700">Get Started</Button>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <Image
              src="/images/logo.png"
              alt="Barksly.ai Logo"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Your Pet's Personal Concierge
            </h1>
            <p className="text-xl text-slate-600 max-w-xl">
              AI-powered assistance for every aspect of pet care, from adoption to health and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full text-lg px-8 py-6 bg-slate-800 hover:bg-slate-700">Join Barksly</Button>
              <Button variant="outline" className="rounded-full text-lg px-8 py-6 border-slate-300 text-slate-700">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/home-family.png?height=400&width=600"
              alt="Happy dog and owner"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="w-full py-16 md:py-24 px-6 md:px-12 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold">Saving Lives Through Smart Matching</h3>
              <p className="text-lg text-slate-200">
                At Barksly.ai, we're on a mission to prevent at-risk shelter pets from being euthanized. Our AI-powered
                platform connects these animals with temporary foster homes or permanent adopters through intelligent
                matching algorithms.
              </p>
              <p className="text-lg text-slate-200">
                By understanding both pet personalities and human preferences, we create successful, lasting
                relationships that save lives and bring joy to families.
              </p>
              <Button className="rounded-full bg-white text-slate-800 hover:bg-slate-200 mt-4">Join Our Mission</Button>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/placeholder.svg?height=350&width=350"
                alt="Rescued pets"
                width={350}
                height={350}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-800">Future Features</h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Barksly.ai is constantly evolving to provide comprehensive support for all your pet care needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<PawPrint className="h-10 w-10 text-slate-700" />}
              title="Pet Adoption & Fostering"
              description="Find your perfect pet match through our AI-powered adoption platform or become a temporary foster to help save lives."
            />

            <FeatureCard
              icon={<MapPin className="h-10 w-10 text-slate-700" />}
              title="Pet Sitters & Boarding"
              description="Discover trusted local pet sitters and boarding facilities vetted by our community and matched to your pet's needs."
            />

            <FeatureCard
              icon={<Stethoscope className="h-10 w-10 text-slate-700" />}
              title="Health Guidance"
              description="Get instant AI-powered symptom checking and health guidance for common pet concerns, with vet referrals when needed."
            />

            <FeatureCard
              icon={<Search className="h-10 w-10 text-slate-700" />}
              title="Lost Pet Alerts"
              description="Quickly create and distribute lost pet alerts and digital flyers to your local community to help bring your pet home."
            />

            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-slate-700" />}
              title="Training & Behavior"
              description="Access personalized training tips and behavior guidance based on your pet's breed, age, and temperament."
            />

            <FeatureCard
              icon={<Apple className="h-10 w-10 text-slate-700" />}
              title="Nutrition & Vet Discovery"
              description="Get tailored nutrition recommendations and find the perfect veterinarian for your pet's specific needs."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 md:py-24 px-6 md:px-12 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Barksly helped me find my perfect companion when I wasn't even sure what kind of dog would fit my lifestyle. The AI matching was spot on!"
              author="Sarah T."
              location="Portland, OR"
              image="/placeholder.svg?height=60&width=60"
            />

            <TestimonialCard
              quote="I was able to foster three at-risk dogs over the past year. The platform made it easy to help save lives while fitting fostering into my busy schedule."
              author="Michael R."
              location="Austin, TX"
              image="/placeholder.svg?height=60&width=60"
            />

            <TestimonialCard
              quote="When my cat showed concerning symptoms, the health guidance feature helped me understand when it was time to see a vet urgently. It potentially saved her life."
              author="Jamie L."
              location="Chicago, IL"
              image="/placeholder.svg?height=60&width=60"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-slate-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved with Barksly.ai</h2>
          <p className="text-xl text-slate-200 mb-8">
            Join our community of pet lovers and help us build a world where every pet has a loving home.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Stay Updated</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-full px-6 py-6 text-lg border-slate-300"
              />
              <Button className="rounded-full px-8 py-6 text-lg bg-slate-800 hover:bg-slate-700">Join Waitlist</Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              We'll keep you updated on our launch and how you can help save pets in need.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">1,200+</span>
              <span className="text-slate-300">Pets Saved</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">850+</span>
              <span className="text-slate-300">Foster Homes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">15+</span>
              <span className="text-slate-300">Shelter Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-12 bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="Barksly.ai Logo" width={40} height={40} />
                <span className="text-xl font-semibold text-white">Barksly.ai</span>
              </div>
              <p className="max-w-xs">AI-powered pet assistance, helping save lives and improve pet care everywhere.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#mission" className="hover:text-white transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Volunteer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Barksly.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl text-slate-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-600 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({
  quote,
  author,
  location,
  image,
}: {
  quote: string
  author: string
  location: string
  image: string
}) {
  return (
    <Card className="border-none shadow-md rounded-2xl overflow-hidden">
      <CardContent className="pt-6">
        <div className="mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.667 13.333H5.33366C5.33366 8 9.33366 8 10.667 8C10.667 5.333 8.66699 2.667 5.33366 2.667C2.00033 2.667 0.000326157 6.667 0.000326157 10.667C0.000326157 20 10.667 18.667 10.667 13.333ZM26.667 13.333H21.3337C21.3337 8 25.3337 8 26.667 8C26.667 5.333 24.667 2.667 21.3337 2.667C18.0003 2.667 16.0003 6.667 16.0003 10.667C16.0003 20 26.667 18.667 26.667 13.333Z"
              fill="#CBD5E1"
            />
          </svg>
        </div>
        <p className="text-slate-700 mb-6">{quote}</p>
        <div className="flex items-center gap-3">
          <Image src={image || "/placeholder.svg"} alt={author} width={60} height={60} className="rounded-full" />
          <div>
            <p className="font-semibold text-slate-800">{author}</p>
            <p className="text-sm text-slate-500">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
