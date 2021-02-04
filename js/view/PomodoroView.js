class PomodoroView{
	constructor(element){
		this._element = element;
	}
	template(model){
		return `<div class="tabela">
			<h1 class="text-light">Lista de pomodoros</h1>
			<table class="table table-dark table-borderless">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Tempo</th>
						<th scope="col">horário</th>
					</tr>
				</thead>
				<tbody>
				${model.pomodoros.map(n => 
					`<tr>
						<th>${n.idPomodoro}</th>
						<th>${n.tempo}</th>
						<th>${DateHelper.dateToText(n.date)}</th>
					</tr>`).join('')}
				</tbody>
			 <tfoot>
                <td colspan="1">Total de tempo</td>
                <td>
                    ${model.totalMinutes + `:` + model.totalSeconds}
                </td>
            </tfoot>
			</table>
		</div>`;
	}
	update(model){
		this._element.innerHTML = this.template(model);
	}
}