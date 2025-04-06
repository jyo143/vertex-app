const CustomTooltip = ({ active, payload, label, dataType }: any) => {
  if (active && payload && payload.length) {
    const visitorPayload = payload.find((p: any) => p.dataKey === "visitors");
    const selectedPayload = payload.find((p: any) => p.dataKey === "selected");
    const selectedLabel = dataType.charAt(0).toUpperCase() + dataType.slice(1);

    return (
      <div className="bg-[#272727] p-3 rounded-md border border-[#444] shadow-lg text-xs">
        <p className="text-sm text-gray-300 mb-2">{`${label}`}</p>
        {visitorPayload && (
          <p className="text-sm" style={{ color: visitorPayload.stroke }}>
            {`Visitors: ${visitorPayload.value}`}
          </p>
        )}
        {selectedPayload && (
          <p className="text-sm" style={{ color: selectedPayload.stroke }}>
            {`${selectedLabel}: ${selectedPayload.value}`}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
