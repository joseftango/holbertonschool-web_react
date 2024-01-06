interface MajorCredits {
    brand: string;
    credits: number;
}

interface MinorCredits {
    brand: string;
    credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        brand: subject1.brand,
        credits: subject1.credits + subject2.credits,
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        brand: subject1.brand,
        credits: subject1.credits + subject2.credits,
    };
}
