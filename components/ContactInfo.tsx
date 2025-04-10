import { MapPin, Mail, Phone } from 'lucide-react'; // Using lucide-react icons again

const ContactInfo = () => {
    return (
        <div className="space-y-8">
             <div>
                <h3 className="text-xl font-semibold mb-4 text-black">Contact Information</h3>
             </div>
             <div className="flex items-start space-x-4">
                 <MapPin className="w-6 h-6 text-teal-500 mt-1" />
                 <div>
                    <h4 className="font-medium text-gray-800">Office Location</h4>
                    <p className="text-gray-600">123 Tech Street, Digital Valley</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                 </div>
             </div>
              <div className="flex items-start space-x-4">
                 <Mail className="w-6 h-6 text-teal-500 mt-1" />
                 <div>
                    <h4 className="font-medium text-gray-800">Email Us</h4>
                    <a href="mailto:hello@thryve.dev" className="text-teal-600 hover:underline">hello@thryve.dev</a>
                 </div>
             </div>
              <div className="flex items-start space-x-4">
                 <Phone className="w-6 h-6 text-teal-500 mt-1" />
                 <div>
                    <h4 className="font-medium text-gray-800">Call Us</h4>
                    <a href="tel:+15551234567" className="text-teal-600 hover:underline">+1 (555) 123-4567</a>
                 </div>
             </div>
        </div>
    )
}

export default ContactInfo; 