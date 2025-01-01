import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import KaprukaEnglish from "../Components/kaprukaEnglish";
import "../../css/report.css";

const Report = ({ lotteries }) => {
    const [todaysLotteries, setTodaysLotteries] = useState([]);

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];

        // Filter and format today's lotteries
        const filteredLotteries = lotteries.filter((lottery) =>
            lottery.date?.startsWith(today)
        );

        setTodaysLotteries(filteredLotteries);
    }, [lotteries]);

    const exportToPDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        let yPosition = 20;

        doc.setFontSize(18);
        doc.text("Lottery Report", pageWidth / 2, yPosition, { align: "center" });
        yPosition += 10;

        todaysLotteries.forEach((lottery, index) => {
            doc.setFontSize(16);
            doc.text(lottery.name || "Unknown Lottery", 20, yPosition);
            yPosition += 8;

            doc.setFontSize(12);
            if (lottery.number) doc.text(`Draw Number: ${lottery.number}`, 20, yPosition);
            yPosition += lottery.number ? 7 : 0;

            if (lottery.color) doc.text(`Color: ${lottery.color}`, 20, yPosition);
            yPosition += lottery.color ? 7 : 0;

            const winningNumbers = [
                lottery.ball1,
                lottery.ball2,
                lottery.ball3,
                lottery.ball4,
                lottery.ball5,
                lottery.ball6,
                lottery.ball7,
            ].filter(Boolean);

            if (winningNumbers.length) {
                doc.text(`Winning Numbers: ${winningNumbers.join(", ")}`, 20, yPosition);
                yPosition += 7;
            }

            if (lottery.next_super) {
                doc.text(`Next Super Jackpot: ${lottery.next_super}`, 20, yPosition);
                yPosition += 10;
            }

            // Add a separator for each lottery
            doc.line(10, yPosition, pageWidth - 10, yPosition);
            yPosition += 10;

            // Handle page breaks
            if (yPosition > pageHeight - 30) {
                doc.addPage();
                yPosition = 20;
            }
        });

        doc.setFontSize(10);
        doc.text(
            `Generated on ${new Date().toLocaleString()}`,
            pageWidth / 2,
            pageHeight - 10,
            { align: "center" }
        );

        doc.save("lottery_report.pdf");
    };

    const renderLotteryComponent = (lottery) => {
        if (lottery.name === "Kapruka") {
            return <KaprukaEnglish lottery={lottery} />;
        } else if (lottery.name === "Laganawasans") {
            return <LaganawasansSinhala lottery={lottery} />;
        } else {
            return (
                <div>
                    <h3 className="lottery-name">{lottery.name || "Unknown Lottery"}</h3>
                    {lottery.number && <div><strong>Draw Number:</strong> {lottery.number}</div>}
                    {lottery.color && <div><strong>Color:</strong> {lottery.color}</div>}
                    {[
                        lottery.ball1,
                        lottery.ball2,
                        lottery.ball3,
                        lottery.ball4,
                        lottery.ball5,
                        lottery.ball6,
                        lottery.ball7,
                    ].some(Boolean) && (
                        <div>
                            <strong>Winning Numbers:</strong>{" "}
                            {[lottery.ball1, lottery.ball2, lottery.ball3, lottery.ball4, lottery.ball5, lottery.ball6, lottery.ball7]
                                .filter(Boolean)
                                .join(", ")}
                        </div>
                    )}
                    {lottery.next_super && <div><strong>Next Super Jackpot:</strong> {lottery.next_super}</div>}
                </div>
            );
        }
    };

    return (
        <div className="report-container">
            <h2 className="report-header">Lottery Report</h2>
            <button className="export-button" onClick={exportToPDF}>
                Export as PDF
            </button>
            <div className="lottery-list">
                {todaysLotteries.length > 0 ? (
                    todaysLotteries.map((lottery, index) => (
                        <div key={index} className="lottery-item">
                            {renderLotteryComponent(lottery)}
                        </div>
                    ))
                ) : (
                    <p className="no-lotteries">No lotteries available for today.</p>
                )}
            </div>
        </div>
    );
};

export default Report;
