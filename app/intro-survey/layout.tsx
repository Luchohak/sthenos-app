export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex items-center justify-center h-5/6">{children}</div>;
}
