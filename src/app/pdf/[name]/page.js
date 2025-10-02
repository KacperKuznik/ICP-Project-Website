export default async function PDFPage({ params }) {
  const { name } = await params;

  return (
    <div className="w-full h-screen">
      <iframe
        src={`/documents/${name}.pdf`}
        className="w-full h-full"
      />
    </div>
  );
}
