type ContactInfo = {
    fullName: string;
    email: string;
    message: string;
};

export default function ContactSection({
                                           contactInfo,
                                           onChange,
                                       }: {
    contactInfo: ContactInfo;
    onChange: (value: ContactInfo) => void;
}) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Full Name"
                    value={contactInfo.fullName}
                    onChange={(e) => onChange({ ...contactInfo, fullName: e.target.value })}
                    className="input"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={contactInfo.email}
                    onChange={(e) => onChange({ ...contactInfo, email: e.target.value })}
                    className="input"
                />
                <textarea
                    placeholder="Your Message (optional)"
                    value={contactInfo.message}
                    onChange={(e) => onChange({ ...contactInfo, message: e.target.value })}
                    className="input"
                    rows={4}
                />
            </div>
        </div>
    );
}
