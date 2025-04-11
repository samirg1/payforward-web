
import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 pt-24 pb-16 mt-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg text-muted-foreground">
                Learn more about PayForward and our mission.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  PayForward was founded in 2023 with a simple mission: to make financial transactions easier and more accessible for everyone. What started as a small idea has grown into a platform used by thousands of people worldwide.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our team of dedicated professionals works tirelessly to ensure that our application remains at the cutting edge of financial technology, while maintaining the simplicity and ease of use that our users have come to expect.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At PayForward, we believe that financial tools should be accessible to everyone, regardless of their technical expertise or background. Our mission is to create intuitive, powerful applications that empower users to take control of their finances.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                <p className="text-muted-foreground mb-4">
                  Behind PayForward is a diverse team of developers, designers, and financial experts who are passionate about creating the best possible experience for our users. We value innovation, integrity, and inclusivity in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
