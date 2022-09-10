import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../notification-button'
import './styles.css'
function SalesCard() {
    return (
		<div className="dsmeta-card">
		   <h2 className="dsmeta-sales-title">Vendas</h2>
		   <div>
			  <div className="dsmeta-form-control-container"> 
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => {}}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
			  </div>
			  <div className="dsmeta-form-control-container"> 
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => {}}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />			  
                </div>
		   </div>
		   <div>
			  <table className="dsmeta-sales-table">
				 <thead>
					<tr>
					   <th className="show-992">ID</th>
					   <th className="show-576">Data</th>
					   <th>Vendedor</th>
					   <th className="show-992">Visitas</th>
					   <th className="show-992">Vendas</th>
					   <th>Total</th>
					   <th>Notificar</th>
					</tr>
				 </thead>
				 <tbody>
					<tr>
					   <td className="show-992">1</td>
					   <td className="show-576">08/09/2022</td>
					   <td>Anakin</td>
					   <td className="show-992">15</td>
					   <td className="show-992">11</td>
					   <td>R$ 55300.00</td>
					   <td>
						  <div className="dsmeta-red-btn-container">
							    <NotificationButton />
						  </div>
					   </td>
					</tr>
					<tr>
					   <td className="show-992">2</td>
					   <td className="show-576">08/09/2022</td>
					   <td>Anakin</td>
					   <td className="show-992">15</td>
					   <td className="show-992">11</td>
					   <td>R$ 55300.00</td>
					   <td>
						  <div className="dsmeta-red-btn-container">
                                <NotificationButton />
						  </div>
					   </td>
					</tr>
					<tr>
					   <td className="show-992">3</td>
					   <td className="show-576">08/09/2022</td>
					   <td>Anakin</td>
					   <td className="show-992">15</td>
					   <td className="show-992">11</td>
					   <td>R$ 55300.00</td>
					   <td>
						  <div className="dsmeta-red-btn-container">
                                <NotificationButton />
						  </div>
					   </td>
					</tr>
					<tr>
					   <td className="show-992">4</td>
					   <td className="show-576">08/09/2022</td>
					   <td>Anakin</td>
					   <td className="show-992">15</td>
					   <td className="show-992">11</td>
					   <td>R$ 55300.00</td>
					   <td>
						  <div className="dsmeta-red-btn-container">
                                <NotificationButton />
						  </div>
					   </td>
					</tr>
					<tr>
					   <td className="show-992">5</td>
					   <td className="show-576">08/09/2022</td>
					   <td>Anakin</td>
					   <td className="show-992">15</td>
					   <td className="show-992">11</td>
					   <td>R$ 55300.00</td>
					   <td>
						  <div className="dsmeta-red-btn-container">
                                <NotificationButton />
						  </div>
					   </td>
					</tr>
				 </tbody>
			  </table>
		   </div>
		</div>                
    )
}

export default SalesCard
