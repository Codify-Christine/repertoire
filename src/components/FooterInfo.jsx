const FooterInfo = () => (
  <footer className="border-t pt-6 mt-10 text-sm text-gray-600">
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div>
        <h3 className="font-semibold">Living Rock Church</h3>
        <p>123 Faith Street, Hope City, HC 12345</p>
        <p>Phone: (555) 123-ROCK</p>
        <p>Email: info@livingrockchurch.org</p>
      </div>
      <div>
        <h4 className="font-semibold">Quick Links</h4>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Events</a></li>
          <li><a href="#" className="hover:underline">Messages</a></li>
          <li><a href="#" className="hover:underline">Ministries</a></li>
          <li><a href="#" className="hover:underline">Giving</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default FooterInfo;
