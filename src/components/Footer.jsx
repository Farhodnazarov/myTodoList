function Footer() {
  return (
    <footer className="text-gray-400 pb-10 text-center bg-gray-100 pt-5">
      <p className="text-sm">
        &copy; 2025 ToDo List. All rights reserved. |
        <span className="ml-2 font-semibold text-gray-900">
          Stay Organized, Stay Productive
        </span>
      </p>
      <p className="text-sm mt-2">
        If you have any questions, feel free to ask me.👉:{" "}
        <a
          target="_blank"
          href="https://t.me/farhodweb"
          className="text-amber-500 hover:underline"
        >
          Farhod Nazarov
        </a>
      </p>
    </footer>
  );
}

export default Footer;
