import moment from 'moment';

//compare if date1 is before date2
export function compareDates(date1: Date, date2: Date): boolean {
	const momentDate1 = moment(date1);
	const momentDate2 = moment(date2);

	if (momentDate1.isBefore(momentDate2)) {
		return true;
	}
	return false;
}

export function isStillValid(date: Date): boolean {
	return moment(date).isAfter(moment());
}

export function parseExpiryToSeconds(exp: string): number {
	const num = parseInt(exp);
	const unitSymbol = exp.slice(-1);

	const unitMap: Record<string, moment.unitOfTime.DurationConstructor> = {
		s: 'seconds',
		m: 'minutes',
		h: 'hours',
		d: 'days',
		w: 'weeks',
		M: 'months',
		y: 'years',
	};

	const unit = unitMap[unitSymbol];

	const duration = moment.duration(num, unit);
	return duration.asSeconds();
}
