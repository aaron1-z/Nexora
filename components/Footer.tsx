export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-line mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-muted text-sm">
            © {currentYear} Nexora · Intelligence for decision-makers
          </p>
        </div>
      </div>
    </footer>
  );
}

