import type TupleConsistentType from 'fup-tuple-consistent-type';
import type TupleImpactType     from 'fup-tuple-impact-type';

type CurryResultType <
    Arguments  extends readonly unknown[],
    Parameters extends readonly unknown[],
    Result     extends          unknown = unknown,
> = TupleImpactType<Arguments, Parameters> extends readonly []
    ? Result
    : <NextArguments extends TupleConsistentType<TupleImpactType<Arguments, Parameters>>>(...nextParameters: NextArguments) => CurryResultType<
        Result,
        Parameters,
        [...Arguments, ...NextArguments]
    >;

export default CurryResultType;