export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12">
      {/* Side Nav */}
      <div className="col-span-3">Left Contains or Sidebar</div>

      {/* Dashboard Contents */}
      <div className="col-span-9">{children}</div>
    </div>
  );
}
