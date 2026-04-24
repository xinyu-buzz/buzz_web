function NotFound() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#ffffff',
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        fontSize: '18px',
        zIndex: 9999,
      }}
    >
      404, page not found
    </div>
  );
}

export default NotFound;
