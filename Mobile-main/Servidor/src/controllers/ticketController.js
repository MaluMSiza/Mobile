const Ticket = require('../models/ticketModel');

exports.liberarLanche = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    ticket.podePegarLanche = true; // Set the podePegarLanche to true
    await ticket.save();

    res.status(200).json({ message: 'Ticket updated successfully', ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
