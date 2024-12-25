import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "../../css/report.css";

const Report = ({ lotteries }) => {
    const [todaysLotteries, setTodaysLotteries] = useState([]);

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];

        const updatedLotteries = lotteries.map((lottery) => {
            const lotteryDate = lottery.date ? lottery.date.split(" ")[0] : today;
            return {
                ...lottery,
                date: lotteryDate,
            };
        });

        const todaysLotteries = updatedLotteries.filter(
            (lottery) => lottery.date === today
        );

        setTodaysLotteries(todaysLotteries);
    }, [lotteries]);

    const exportToPDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        let yPosition = 20;

        todaysLotteries.forEach((lottery, index) => {
            // Header for each lottery
            doc.setFontSize(18);
            doc.text(lottery.name || "Unknown Lottery", pageWidth / 2, yPosition, { align: "center" });

            // Details
            doc.setFontSize(12);
            yPosition += 10;
            if (lottery.number) doc.text(`Draw Number: ${lottery.number}`, 20, yPosition);
            yPosition += lottery.number ? 7 : 0;
            if (lottery.color) doc.text(`Colour: ${lottery.color}`, 20, yPosition);
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

            if (lottery.next_super) doc.text(`Next Super Jackpot: ${lottery.next_super}`, 20, yPosition);
            yPosition += lottery.next_super ? 15 : 0;

            // Add a horizontal line between lotteries
            doc.line(10, yPosition, pageWidth - 10, yPosition);
            yPosition += 10;

            // Add a page break if needed
            if (yPosition > pageHeight - 30) {
                doc.addPage();
                yPosition = 20;
            }
        });

        // Footer
        doc.setFontSize(10);
        doc.text(
            `Generated on ${new Date().toLocaleString()}`,
            pageWidth / 2,
            pageHeight - 10,
            { align: "center" }
        );

        doc.save("lottery_report.pdf");
    };

    return (
        <div className="report-container">
            <h2 className="report-header">Lottery Report</h2>
            <button className="export-button" onClick={exportToPDF}>
                Export as PDF
            </button>
            <div className="lottery-list">
                {todaysLotteries.map((lottery) => (
                    <div key={lottery.id} className="lottery-item">
                        <img
                            src={`/images/${lottery.name?.toLowerCase() || "default"}.png`}
                            alt={`${lottery.name || "Lottery"} logo`}
                            className="lottery-logo"
                        />
                        <h3>{lottery.name || "Unknown Lottery"}</h3>
                        {lottery.number && (
                            <div>
                                <strong>Draw Number:</strong> {lottery.number}
                            </div>
                        )}
                        {lottery.color && (
                            <div>
                                <strong>Colour:</strong> {lottery.color}
                            </div>
                        )}
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
                        {lottery.next_super && (
                            <div>
                                <strong>Next Super Jackpot:</strong> {lottery.next_super}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Report;
