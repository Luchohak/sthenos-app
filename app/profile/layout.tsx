export default function ProfileLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className="flex items-center justify-center h-4/6">{children}</div>;
  }
  